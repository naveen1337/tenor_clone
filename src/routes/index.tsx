import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomePage from "../pages/home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
