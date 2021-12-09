import createEmptyStorage from "../globalHelperFunctions/initStorage";

describe("Local storage", () => {
    it("Is empty local storage created", () => {
        const storageName = "applicationsList";
        createEmptyStorage();

        expect(localStorage.getItem(storageName)).toEqual("[]");
    });
})