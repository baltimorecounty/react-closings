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
        <TableHeadCell></TableHeadCell>
        <TableHeadCell>Status</TableHeadCell>
        <TableHeadCell>Agency/Program</TableHeadCell>
        <TableHeadCell>Information</TableHeadCell>
      </TableRow>
    </TableHead>
  );
};

export default ClosingHeaders;
