import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import NavigationBar from "./routes/NavigationBar";
import LandingPage from "./routes/LandingPage";

const router = createBrowserRouter([
	{
		path: "/fake-store",
		element: <NavigationBar />,
		children: [
			{
				path: "home?",
				element: <LandingPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
