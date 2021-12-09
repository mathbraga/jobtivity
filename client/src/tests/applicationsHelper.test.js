import { statusTypeToColor } from "../components/ActiveApplications/styledComponents/helpers";

describe("Status badge color", () => {
    it("Convert status to appropriate color", () => {
        expect(statusTypeToColor("Contact")).toEqual("green");
        expect(statusTypeToColor("Awaiting")).toEqual("grey");
    })
})