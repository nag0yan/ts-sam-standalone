import { handler } from "../../../src/handlers/app";

describe("Test", () => {
	it("Verifies successful response", async () => {
		const result = await handler();
		const expectedResult = "Hello from Lambda!";

		expect(result).toEqual(expectedResult);
	});
});
