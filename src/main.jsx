import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./routes/LandingPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/fake-store",
		element: <LandingPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
