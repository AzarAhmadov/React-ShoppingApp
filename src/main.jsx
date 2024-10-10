import { createRoot } from "react-dom/client";
import "./assets/css/app.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/routers";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
