import { createContext } from "react";

const storageName = "applicationsList";

const storageContext = createContext({
    applicationsList: () => {
        if(localStorage.getItem(storageName) === null){
            localStorage.setItem(storageName, "[]");
            return JSON.parse(localStorage.getItem(storageName));
        }
        else
            return JSON.parse(localStorage.getItem(storageName));
    },
    setApplications: (updatedList) => {}
});

export default storageContext;