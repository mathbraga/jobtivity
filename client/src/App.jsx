import Routes from "./routes";
import storageContext from "./context/storageContext";
import createEmptyStorage from "./context/initStorage";
import { useState } from "react";

import "./index.css";

const App = () => {
  const [applicationsList, setApplications] = useState(createEmptyStorage);

  return (
    <storageContext.Provider value={{ applicationsList, setApplications }}>
      <Routes />
    </storageContext.Provider>
  );
}

export default App;
