import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import React from "react";
import { Run } from "./startup";
import ClosingTable from "./components/ClosingTable";

Run();

function App(props) {
  return <ClosingTable />;
}

export default App;
