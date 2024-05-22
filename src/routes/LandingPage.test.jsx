import { describe, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import renderWithRouter from "../utils/renderWithRouter";
import LandingPage from "./LandingPage";

describe("Landing Page Component", () => {
	it("Renders correct page", async () => {
		renderWithRouter(<LandingPage />);

		await waitFor(
			() => {
				expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
					/never miss a single moment/
				);
			},
			{ timeout: 3000 }
		);
		// expect(screen.getByText(/never miss a single moment/)).toBeInTheDocument();
	});
});
