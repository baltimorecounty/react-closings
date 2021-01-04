import React from "react";
import ClosingIcon from "./ClosingIcon";

const PrimaryDepartmentClosing = (props) => {
  const { data } = props;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const todaysDate = new Date().toLocaleDateString(undefined, options);

  const primaryRecord = data.filter(
    ({ name }) => name === "Baltimore County Government"
  );

  return data.length > 0 ? (
    <div className="closing-callout hero-unit">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-9 col-sm-9 col-md-pull-3 col-sm-pull-3">
            <h2>{primaryRecord[0].name}</h2>
            <div className="county-closings-status-container">
              <p>
                <strong>Status: </strong>
                {primaryRecord[0].status}
              </p>
              <div className="todays-date">
                <p>{todaysDate}</p>
              </div>
              <p>{primaryRecord[0].information}</p>
            </div>
          </div>
          <div className="county-closings-image-container col-md-3 col-sm-3 col-md-push-9 col-sm-push-9">
            <ClosingIcon type={primaryRecord[0].status} size="large" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Something Went Wrong</div>
  );
};

export default PrimaryDepartmentClosing;
