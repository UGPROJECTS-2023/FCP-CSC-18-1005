function Storage() {
  this.save = (key, value) => {
    return localStorage.setItem(key, value);
  };
  this.get = (key) => {
    return localStorage.getItem(key);
  };
  this.remove = (key) => {
    return localStorage.removeItem(key);
  };

  this.saveObject = (key, obj) => {
    if (obj) {
      const textObj = JSON.stringify(obj);
      this.save(key, textObj);
    }
  };
  this.getObject = (key) => {
    const textObj = this.get(key);
    if (textObj && textObj !== "") return JSON.parse(textObj);
  };
}

const storage = new Storage();
export { storage };
