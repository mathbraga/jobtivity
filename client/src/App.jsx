import React from "react";
import { Provider } from 'react-redux';
import Routes from "./routes";

import store from './store';
import createEmptyStorage from "./context/initStorage";

import "./index.css";

createEmptyStorage();

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
