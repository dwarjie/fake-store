import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import NavigationBar from "./routes/NavigationBar";
import LandingPage from "./routes/LandingPage";
import Error from "./components/Error";
import Shop from "./routes/Shop";
import PersonalCart from "./routes/PersonalCart";

const router = createBrowserRouter([
	{
		path: "/fake-store",
		element: <NavigationBar />,
		children: [
			{
				path: "home?",
				element: <LandingPage />,
				errorElement: <Error />,
			},
			{
				path: "shop",
				element: <Shop />,
				errorElement: <Error />,
			},
			{
				path: "cart",
				element: <PersonalCart />,
				errorElement: <Error />
			}
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
