import React from "react";
import AdminPanel from "../components/admin/AdminPanel";
import { Route, Routes } from "react-router-dom";
import ListProduct from "../components/products/ListProduct";

const MainRoutes = () => {
  const PUBLIC = [
    {
      link: "/admin",
      element: <AdminPanel />,
      id: 1,
    },
    {
      link: "/menu",
      element: <ListProduct />,
      id: 2,
    },
  ];
  return (
    <Routes>
      {PUBLIC.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
