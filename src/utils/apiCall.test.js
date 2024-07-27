// reference: https://adequatica.medium.com/api-testing-with-vitest-391697942527

import { beforeAll, describe, expect, expectTypeOf, it } from "vitest";

const TIMEOUT = 30000;
const URL = "https://fakestoreapi.com/products?limit=4";

describe("Request Products from fake-store API", () => {
	let response;
	let body;

	beforeAll(async () => {
		response = await fetch(URL);
		body = await response.json();
	}, TIMEOUT);

	it("Should have response status 200", () => {
		expect(response.status).toBe(200);
	});

	it("Should have array in the body", () => {
		expectTypeOf(body).toBeArray();
	});

	it("Should have 4 products only", () => {
		expect(body).toHaveLength(4);
	});
});
