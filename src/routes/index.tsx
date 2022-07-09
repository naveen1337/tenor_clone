import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomePage from "../pages/home";
import SearchPage from "../pages/search";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}
