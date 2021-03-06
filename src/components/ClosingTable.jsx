import React from "react";

import { Table } from "@baltimorecounty/dotgov-components";

const ClosingTable = (props) => {
  return <Table className="responsive-main-table">{props.children}</Table>;
};

export default ClosingTable;
