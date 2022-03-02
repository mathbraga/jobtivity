const storageName = "applicationsList";
const historyStorageName = "applicationsHistory";
const toggleStorageName = "toggleState"

const createEmptyStorage = () => {
    if(localStorage.getItem(storageName) === null)
      localStorage.setItem(storageName, "[]");
    if(localStorage.getItem(historyStorageName) === null)
      localStorage.setItem(historyStorageName, "[]");
    if(localStorage.getItem(toggleStorageName) === null)
      localStorage.setItem(toggleStorageName, "false");
}

export default createEmptyStorage;