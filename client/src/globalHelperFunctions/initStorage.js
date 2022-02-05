const storageName = "applicationsList";
const historyStorageName = "applicationsHistory";

const createEmptyStorage = () => {
    if(localStorage.getItem(storageName) === null)
      localStorage.setItem(storageName, "[]");
    if(localStorage.getItem(historyStorageName) === null)
      localStorage.setItem(historyStorageName, "[]");
}

export default createEmptyStorage;