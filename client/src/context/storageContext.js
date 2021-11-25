import { createContext } from "react";

const storageName = "applicationsList";

const storageContext = createContext({
    applicationsList: [],
    setApplications: (updatedList) => {}
});

export default storageContext;