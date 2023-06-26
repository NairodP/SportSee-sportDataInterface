import { Outlet } from "react-router-dom";
import MainNavbar from "/src/components/mainNavbar.jsx";

export default function Root() {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
}