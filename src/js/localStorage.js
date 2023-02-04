const saveData = (key, data) => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  } catch (error) {
    console.log(
      `An error occurred while saving ${key} to local storage: `,
      error.message
    );
  }
};

const loadData = key => {
  try {
    /* loadlibrary = key; */
    const jsonData = localStorage.getItem(key);
    return jsonData === null ? undefined : JSON.parse(jsonData);
  } catch (error) {
    console.log(
      `An error occurred while fetching ${key} data from local storage: `,
      error.message
    );
  }
};

/* const delData = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(
      `An error occurred while deleting ${key} from local storage: `,
      error.message
    );
  }
};
 */
export {
  saveData,
  loadData,
  /* delData, */
};