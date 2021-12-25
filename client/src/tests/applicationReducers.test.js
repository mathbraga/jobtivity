import reducer from "../store/reducers/applicationsReducer";

const sampleData = {
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

describe("Global state manager reducers", () => {
    it("Return applications object", () => {
        expect(reducer(sampleData, {})).toEqual({...sampleData});
    });

    it("Should update assigned application status", () => {
        const testAction = {
            type: "CHANGE_STATUS",
            newStatus: "Awaiting",
            index: 1
        }
        const testData = sampleData;
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

    it("Should add application to beginning of the list", () => {
        const testData = sampleData;
        const testAction = {
            type: "ADD_APPLICATION",
            newApplication: {
                name:"Google",
                date:"13/12/2021",
                website:"someurl.com",
                role:"BackEnd",
                status:"Awaiting"
            }
        }
        const { applications } = reducer(testData, testAction);
        const latestApplication = applications[0];

        expect(applications.length).toEqual(3);
        expect(latestApplication).toEqual(testAction.newApplication);
    });

    it("Should delete designated application.", () => {
        const testData = sampleData;
        const testAction = {
            type: "DELETE_APPLICATION",
            index: 0
        }
        const { applications } = reducer(testData, testAction);
        
        expect(applications.length).toEqual(2);
        expect(applications[0]).toEqual({
            name:"Jobtivity",
            date:"30/11/2021",
            website:"someurl.com",
            role:"FullStack",
            status:"Contact"
        })
    })
});
