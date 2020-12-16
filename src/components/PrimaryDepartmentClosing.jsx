import React from "react";
import ClosingIcon from "./ClosingIcon";

const PrimaryDepartmentClosing = (props) => {
  const { data } = props;

  const todaysDate = new Date().toLocaleDateString();

  const primaryRecord = data.filter(
    ({ name }) => name === "Baltimore County Government"
  );

  return (
    <div className="closing-callout hero-unit">
      <div className="container-fluid">
        <div className="row">
          <div className="county-closings-image-container col-md-3 col-sm-3 col-md-push-9 col-sm-push-9">
            <ClosingIcon type={primaryRecord[0].status} size="extraLarge" />
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default PrimaryDepartmentClosing;