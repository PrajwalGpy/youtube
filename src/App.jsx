import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maincontainer from "../src/components/Maincontainer";
import WatchPage from "./components/WhacthPage";
import SearchResultPage from "./components/SearchResultPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Head />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <SearchResultPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={Store}>
      <div className="relative">
        <RouterProvider router={AppRouter} />
      </div>
    </Provider>
  );
};

export default App;
