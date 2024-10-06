import { getResponse, IRandom } from "../../../src/handlers/app";

class Random implements IRandom {
	random(): number {
		return 1;
	}
}

describe("Test", () => {
	it("Verifies successful response", async () => {
		const result = await getResponse(new Random());
		const expectedResult = "Hello from Lambda! Random: 1";

		expect(result).toEqual(expectedResult);
	});
});
