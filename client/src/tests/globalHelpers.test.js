import createEmptyStorage from "../globalHelperFunctions/initStorage";
import { 
    convertStringToObject, 
    convertObjectToString 
} from "../globalHelperFunctions/dataConversionHelpers";

import {
    formatDate,
    prettifyDate
} from "../components/ActiveApplications/styledComponents/helpers/";

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

describe("Date formatting functions", () => {
    it("Return date in yyyy-mm-dd format", () => {
        expect(formatDate(new Date("January 7, 2022"))).toEqual("2022-01-07");
    })

    it("Return date in the form of 'dd Month yyyy'", () => {
        expect(prettifyDate("2022-01-13")).toEqual("13 Jan 2022");
    })
});
