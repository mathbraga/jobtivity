const storageName = "applicationsList";

const createEmptyStorage = () => {
    if(localStorage.getItem(storageName) === null)
      localStorage.setItem(storageName, "[]");
}

export default createEmptyStorage;