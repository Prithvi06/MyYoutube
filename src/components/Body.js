import React from "react";
import Sidebar from "./Sidebar";
import Head from "./Head";
import { Outlet } from "react-router-dom";
import ButtonList from "./ButtonList";
const Body = () => {
    return (
        <div className="flex">
            <Head />
            <ButtonList />
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Body;