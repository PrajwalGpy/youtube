import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import Store from "./utils/Store";

const App = () => {
  return (
    <Provider store={Store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
};

export default App;
