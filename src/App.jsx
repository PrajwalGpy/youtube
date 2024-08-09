import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maincontainer from "../src/components/Maincontainer";
import WhacthPage from "./components/WhacthPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "/watch",
        element: <WhacthPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={Store}>
      <div className="relative">
        <Head />
        <RouterProvider router={AppRouter} />
      </div>
    </Provider>
  );
};

export default App;
