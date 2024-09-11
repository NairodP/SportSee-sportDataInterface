import { Outlet } from "react-router-dom";
import MainNavbar from "/src/components/MainNavbar.jsx";

export default function Root() {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
}