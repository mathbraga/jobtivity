import reducer from "../store/reducers/themeToggleReducer";

describe("Theme toggle value", () => {
    it("Invert toggle value.", () => {
        const result = reducer({toggleState: true}, {type: "TOGGLE_THEME"});

        expect(result.toggleState).toEqual(false);
    })
});
