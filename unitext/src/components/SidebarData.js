import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icons: <AiIcons.AiFillHome />,
        cName: "navText",
    },
    {
        title: "Notes",
        path: "/notes",
        icons: <FaIcons.FaBook />,
        cName: "navText",
    },
    {
        title: "Notes1",
        path: "/notes1",
        icons: <IoIcons.IoMdBook />,
        cName: "navText",
    },
];