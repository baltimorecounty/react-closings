import React, { useEffect } from "react";
import useClosings from "../hooks/useClosings";
import PrimaryDepartmentClosing from "./PrimaryDepartmentClosing";
import ClosingsTable from "./ClosingTable";
import ClosingHeaders from "./ClosingHeaders";
import ClosingRows from "./ClosingRows";

const ClosingsPage = (props) => {
  const [{ closings = [], hasError, isLoading }] = useClosings();

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
    <div>
      {" "}
      {isLoading ? (
        <p>{`Loading Closing Information...`}</p>
      ) : (
        <div>
          <PrimaryDepartmentClosing data={records}/>
          <ClosingsTable id="responsive-main-table" className="display">
            <ClosingHeaders />
            <ClosingRows data={records} />
          </ClosingsTable>
        </div>
      )}
    </div>
  );
};

export default ClosingsPage;
