import React from "react";
import Home from "../home/Home";
import About from "../about/About";
import { useRoutes } from "react-router-dom";

const Routing = () => {
    let routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "*", element: <div>404 Working</div> },

        // ...
    ]);
    return routes;
};

export default Routing;
