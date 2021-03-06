import React from "react";
import { TableCell, TableRow } from "@baltimorecounty/dotgov-components";
import ClosingIcon from "./ClosingIcon";

const ClosingRows = (props) => {
  const { data } = props;

  const recordsToDisplay = data.filter(
    ({ name }) => name !== "Baltimore County Government"
  );

  return recordsToDisplay.map((item, i) => (
    <TableRow key={`tr-${i}`} className={item.status}>
      <TableCell key={`tdIcon-${i}`}>
        <ClosingIcon key={`icon-{i}`} type={item.status} size="small" />
      </TableCell>
      <TableCell key={`tdStatus-${i}`}>{item.status}</TableCell>
      <TableCell key={`tdURL-${i}`}>
        <p>
          <a
            href={item.contentItemUrl}
            title="Get the latest closing information."
          >
            {item.name}
          </a>
        </p>
      </TableCell>
      <TableCell key={`tdInfo-${i}`}>{item.information}</TableCell>
    </TableRow>
  ));
};

export default ClosingRows;
