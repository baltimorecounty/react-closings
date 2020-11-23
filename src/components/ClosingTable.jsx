import React, { useEffect } from "react";
import useClosings from "../hooks/useClosings";

const ClosingTable = (props) => {
  const [{ department = [], hasError, isLoading }] = useClosings();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { records = [] } = department;

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
        "This is a work in progress"
      )}
    </div>
  );
};

export default ClosingTable;
