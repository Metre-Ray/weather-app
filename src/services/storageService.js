const STORAGE_KEY = 'weather-search-app';

const storageService = {
  setItems: (item1, item2) => {
    localStorage.setItem(STORAGE_KEY, `${item1} ; ${item2}`);
  },
  getItems: () => {
    const tempItem = localStorage.getItem(STORAGE_KEY);
    if (!tempItem) return [null, null];
    const [city, country] = tempItem.split(';').map((el) => el.trim());
    return [city, country];
  },
  clearStorage: () => {
    localStorage.clear();
  }
}

export default storageService;
