module.exports = {
  convertObjToQs(obj) {
    return Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join("&");
  },
};
