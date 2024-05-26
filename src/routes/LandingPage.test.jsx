import { describe, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import renderWithRouter from "../utils/renderWithRouter";
import LandingPage from "./LandingPage";

describe("Landing Page Component", () => {
	it("Renders correct page", async () => {
		renderWithRouter(<LandingPage />);

		await waitFor(
			() => {
				expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(3);
			},
			{ timeout: 5000 }
		);
	});

	it("Renders 4 featured products", async () => {
		renderWithRouter(<LandingPage />);

		await waitFor(
			() => {
				expect(screen.getAllByTestId("product-element")).toHaveLength(4);
			},
			{ timeout: 5000 }
		);
	});
});
