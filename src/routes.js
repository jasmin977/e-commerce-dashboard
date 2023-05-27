import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdSpaceDashboard,
  MdLogout,
  MdLayers,
  MdChatBubble,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import Products from "layouts/products";
import Orders from "layouts/orders";
import Clients from "layouts/clients";
import Chat from "layouts/chat";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: (
      <Icon as={MdSpaceDashboard} width="20px" height="20px" color="inherit" />
    ),
    component: MainDashboard,
  },
  {
    name: "Clients",
    layout: "/admin",
    path: "/clients",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Clients,
  },
  {
    name: "Products",
    layout: "/admin",
    path: "/products",
    icon: <Icon as={MdLayers} width="20px" height="20px" color="inherit" />,
    component: Products,
  },
  {
    name: "Orders",
    layout: "/admin",
    path: "/orders",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: Orders,
  },

  {
    name: "Chat",
    layout: "/admin",
    path: "/chat",
    icon: <Icon as={MdChatBubble} width="20px" height="20px" color="inherit" />,
    component: Chat,
  },

  {
    name: "Log out",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLogout} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  },
];

export default routes;
