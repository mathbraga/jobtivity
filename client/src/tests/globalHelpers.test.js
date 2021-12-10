import createEmptyStorage from "../globalHelperFunctions/initStorage";
import { 
    convertStringToObject, 
    convertObjectToString 
} from "../globalHelperFunctions/dataConversionHelpers";

const storageName = "applicationsList";

describe("Local storage", () => {
    it("Is empty local storage created", () => {
        createEmptyStorage();

        expect(localStorage.getItem(storageName)).toEqual("[]");
        localStorage.clear();
    });
});

describe("Data manipulation for local storage", () => {
    it("Convert string to object", () => {
        const sampleStringData = '[{"test1": "a", "test2": "b"}]';

        expect(typeof convertStringToObject(sampleStringData)).toEqual('object');
    });

    it("Convert object to string", () => {
        const sampleObjectData = [{test1: "a", test2: "b"}];

        expect(typeof convertObjectToString(sampleObjectData)).toEqual('string');
    });
});
