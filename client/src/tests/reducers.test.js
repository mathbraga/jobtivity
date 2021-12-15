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
    const currentApplications = state.applications;
    
    if(action.type === "ADD_APPLICATION"){
        state.applications = [action.newApplication, ...currentApplications];

        return {...state};
    }
    else if(action.type === "DELETE_APPLICATION"){
        currentApplications.splice(action.index, 1);
        state.applications = [...currentApplications];

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

    it("Should delete designated application.", () => {
        const testData = sampleData;
        const testAction = {
            type: "DELETE_APPLICATION",
            index: 0
        }
        const { applications } = temporaryReducer(testData, testAction);
        
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