import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "ADMIN",
    path: "/admin",
    icon: <AiIcons.AiFillTool />,
    cName: "nav-text",
  },

  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillDashboard />,
    cName: "nav-text",
  },
  {
    title: "Clientes",
    path: "/clients",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Formulario",
    path: "/formulario",
    icon: <AiIcons.AiOutlineForm />,
    cName: "nav-text",
  },
];