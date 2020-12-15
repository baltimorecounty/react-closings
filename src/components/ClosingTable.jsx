import React, { useEffect } from "react";
import useClosings from "../hooks/useClosings";
import { Table, TableBody } from "@baltimorecounty/dotgov-components";
import ClosingHeaders from "./ClosingHeaders";
import ClosingRows from "./ClosingRows";

const ClosingTable = (props) => {
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
        <Table id="responsive-main-table" className="display">
          <ClosingHeaders />
          <TableBody>
            <ClosingRows data={records} />
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default ClosingTable;
