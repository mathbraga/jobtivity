import { convertStringToObject } from "./dataConversionHelpers";

const storageName = "applicationsList";

const createEmptyStorage = () => {
    if(localStorage.getItem(storageName) === null)
      localStorage.setItem(storageName, "[]");

    return convertStringToObject(localStorage.getItem(storageName));
}

export default createEmptyStorage;