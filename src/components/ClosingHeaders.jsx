import React from "react";
import {
  TableHead,
  TableHeadCell,
  TableRow,
} from "@baltimorecounty/dotgov-components";

const ClosingHeaders = (props) => {
  return (
    <TableHead>
      <TableRow>
        <TableHeadCell key="BlankHeader"></TableHeadCell>
        <TableHeadCell key="StatusHeader">Status</TableHeadCell>
        <TableHeadCell key="AgencyHeader">Agency/Program</TableHeadCell>
        <TableHeadCell key="InformationHeader">Information</TableHeadCell>
      </TableRow>
    </TableHead>
  );
};

export default ClosingHeaders;
