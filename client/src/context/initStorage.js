const storageName = "applicationsList";

const createEmptyStorage = () => {
    if(localStorage.getItem(storageName) === null)
      localStorage.setItem(storageName, "[]");

    return JSON.parse(localStorage.getItem(storageName));
}

export default createEmptyStorage;