import React from "react";
import { TableCell, TableRow } from "@baltimorecounty/dotgov-components";

const ClosingRows = (props) => {
  const { data } = props;

  return data.map((item) => (
    <TableRow>
      <TableCell>
        <i
          className="fa fa-exclamation-triangle fa-2x icon-small icon-inline icon-modified"
          aria-hidden="true"
        ></i>
      </TableCell>
      <TableCell>{item.status}</TableCell>
      <TableCell>
        <p>
          <a
            href={item.contentItemUrl}
            title="Get the latest closing information."
          >
            {item.name}
          </a>
        </p>
      </TableCell>
      <TableCell>{item.information}</TableCell>
    </TableRow>
  ));
};

export default ClosingRows;
