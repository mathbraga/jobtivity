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
        ],
    history:
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
        const expectedResult =
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

        expect(reducer(testData, testAction).applications).toEqual(expectedResult);
    })

    it("Should add application to the beginning of the lists", () => {
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
        const { applications, history } = reducer(testData, testAction);
        const latestApplication = applications[0];
        const latestHistory = history[0];

        expect(applications.length).toEqual(3);
        expect(history.length).toEqual(3);
        expect(latestApplication).toEqual(testAction.newApplication);
        expect(latestHistory).toEqual(testAction.newApplication);
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

    it("Should remove application from history list.", () => {
        const testData = sampleData;
        const testAction = {
            type: "REMOVE_APP_HISTORY",
            index: 0
        }
        const { history } = reducer(testData, testAction);

        expect(history.length).toEqual(2);
        expect(history[0]).toEqual({
            name:"Jobtivity",
            date:"30/11/2021",
            website:"someurl.com",
            role:"FullStack",
            status:"Contact"
        });
    })
});
