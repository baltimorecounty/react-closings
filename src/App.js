import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import React from "react";
import { Run } from "./startup";
import ClosingsPage from "./components/ClosingsPage";

Run();

function App() {
  return <ClosingsPage />;
}

export default App;
