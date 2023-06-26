import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./pages/Root.jsx";
import "../src/css/index.css";
import Home from "./pages/Home.jsx";
import Profil from "./pages/Profil.jsx";
import Setting from "./pages/Setting.jsx";
import Community from "./pages/Community.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/community" element={<Community />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
