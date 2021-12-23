import reducer from "../store/reducers/formsReducer";

describe("Form related reducers", () => {
    it("Should toggle form boolean.", () => {
        const testAction = {
            type: "TOGGLE_FORM"
        }
        let reducerResult = reducer(undefined, testAction);
        expect(reducerResult.formVisibility).toEqual(true);
    });

    it("Should not toggle boolean if no action passed.", () => {
        const testAction = {
            type: "TOGGLE_FORM"
        }
        let reducerResult = reducer(undefined, testAction);
        reducerResult = reducer(undefined, {});
        expect(reducerResult.formVisibility).toEqual(false);
    })
})