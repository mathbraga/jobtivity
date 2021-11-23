import { createContext } from "react";

const storageContext = createContext({
    applicationsList: [],
    setApplications: (updatedList) => {}
});

export default storageContext;