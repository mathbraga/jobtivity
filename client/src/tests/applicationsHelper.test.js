import { statusTypeToColor } from "../globalHelperFunctions/utils";

describe("Status badge color", () => {
    it("Convert status to appropriate color", () => {
        expect(statusTypeToColor("Scheduled")).toEqual("green");
        expect(statusTypeToColor("Awaiting")).toEqual("grey");
    })
})