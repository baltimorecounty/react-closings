import React, { useEffect } from "react";
import useClosings from "../hooks/useClosings";
import PrimaryDepartmentClosing from "./PrimaryDepartmentClosing";
import ClosingsTable from "./ClosingTable";
import ClosingHeaders from "./ClosingHeaders";
import ClosingRows from "./ClosingRows";
import ClosingsSideBar from "./ClosingsSideBar";
import ReactHtmlParser from "react-html-parser";

const ClosingsPage = (props) => {
  const [{ closings = [], hasError, isLoading }] = useClosings();
  const {
    programHeader,
    informationHeader,
    informationAbout,
  } = window.closings;
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { records = [] } = closings;

  if (hasError) {
    return (
      <p>
        We could not load information for closings. Please try again in a few
        minutes.
      </p>
    );
  }

  return (
    <div className="dg_internal-template">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            {isLoading ? (
              <p>{`Loading Closing Information...`}</p>
            ) : (
              <div id="dg_main-content">
                <PrimaryDepartmentClosing data={records} />
                {ReactHtmlParser(informationHeader)}
                {ReactHtmlParser(informationAbout)}
                {ReactHtmlParser(programHeader)}
                <ClosingsTable id="responsive-main-table" className="display">
                  <ClosingHeaders />
                  <ClosingRows data={records} />
                </ClosingsTable>
              </div>
            )}
          </div>
          <div className="col-md-4 col-sm-12">
            <ClosingsSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosingsPage;
