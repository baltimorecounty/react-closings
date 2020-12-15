import React from "react";
import { TableCell, TableRow } from "@baltimorecounty/dotgov-components";
import ClosingIcon from "./ClosingIcon";

const ClosingRows = (props) => {
  const { data } = props;

  return data.map((item) => (
    <TableRow>
      <TableCell>
        <ClosingIcon type={item.status} size="small" />
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
