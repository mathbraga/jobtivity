import createEmptyStorage from "../globalHelperFunctions/initStorage";

const storageName = "applicationsList";

const convertStringToObject = (data) => JSON.parse(data);

describe("Local storage", () => {
    it("Is empty local storage created", () => {
        createEmptyStorage();

        expect(localStorage.getItem(storageName)).toEqual("[]");
        localStorage.clear();
    });
});

describe("Data manipulation for local storage", () => {
    it("Convert string to object", () => {
        const testData = '[{"test1": "a", "test2": "b"}]';
        // const expectedTestResult = [{test1: 'a', test2: 'b'}];

        expect(typeof convertStringToObject(testData)).toEqual('object');
    });
});
