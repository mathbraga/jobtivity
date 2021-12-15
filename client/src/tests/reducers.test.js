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

const temporaryReducer = (state, action) => {
    const { applications } = state;
    if(action.type == "ADD_APPLICATION"){
        state.applications = [action.newApplication, ...applications];
        return {...state};
    }

    return {...state}
}

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
        const { applications } = temporaryReducer(testData, testAction);
        const latestApplication = applications[0];

        expect(applications.length).toEqual(3);
        expect(latestApplication).toEqual(testAction.newApplication);
    });
});