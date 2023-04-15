import React from "react";
import Product from '../pages/Product/Product'

export const RoutePathes = Object.freeze({
  Collection: "/",
  Men: "men",
  Wemen: "wemen",
  About: "about",
  Contact: "contact",
});

const ROUTES = [
  {
    id: "collection",
    name: "Collection",
    path: RoutePathes.Collection,
    Element: <Product/>,
    isHidden: false,
  },
  {
    id: "men",
    name: "Men",
    path: RoutePathes.Men,
    Element: "",
    isHidden: false,
  },
  {
    id: "wemen",
    name: "Wemen",
    path: RoutePathes.Wemen,
    Element: "",
    isHidden: false,
  },
  {
    id: "about",
    name: "About",
    path: RoutePathes.About,
    Element: "",
    isHidden: false,
  },
  {
    id: "contact",
    name: "Contact",
    path: RoutePathes.Contact,
    Element: "",
    isHidden: false,
  },
];

export default ROUTES;
