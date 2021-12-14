import reducer from "../store/reducers/applicationsReducer";

describe("Global state manager reducers", () => {
    it("Return applications object", () => {
        expect(reducer(undefined, {})).toEqual({applications: null});
    });

    it("Should update assigned application status", () => {
        const testAction = {
            type: "CHANGE_STATUS",
            newStatus: "Awaiting",
            index: 1
        }
        const testData = {
            applications: 
                [
                    {
                        name:"Jobtivity",
                        date:"30/11/2021",
                        website:"someurl.com",
                        role:"FullStack",
                        status:"Contact"
                    },
                    {
                        name:"Amazon",
                        date:"02/12/2021",
                        website:"someurl.com",
                        role:"FrontEnd",
                        status:"Contact"
                    }
                ]
        };
        const expectedResult = {
            applications: 
                [
                    {
                        name:"Jobtivity",
                        date:"30/11/2021",
                        website:"someurl.com",
                        role:"FullStack",
                        status:"Contact"
                    },
                    {
                        name:"Amazon",
                        date:"02/12/2021",
                        website:"someurl.com",
                        role:"FrontEnd",
                        status:"Awaiting"
                    }
                ]
        }

        expect(reducer(testData, testAction)).toEqual(expectedResult);
    })
});