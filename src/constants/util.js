import { storage } from "./storage";

const Util = {
  baseUrl: "https://service.phopis.com/bellabanga/api/",
  getHeaders: () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json; charset=utf-8",
    };
  },
  getAuthorizedHeaders: () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json; charset=utf-8",
      Authorization: `Bearer ${storage.get("userToken")}`,
    };
  },
  getAuthorizedFileHeaders: () => {
    return {
      "Content-Type": "multipart/form-data",
      Accept: "application/json; charset=utf-8",
      Authorization: `Bearer ${storage.get("userToken")}`,
    };
  },
  capitalize: (str) => {
    if (!str) return ""; // Check if str is undefined or null
    return str[0].toUpperCase() + str.slice(1);
  },
  
  validate: (validation, setValidation, input, keys) => {
    keys.forEach((key) => {
      let validationKey = `valid${Util.capitalize(key)}`;
      let value = input[key];

      if (value?.length < 3)
        setValidation({ ...validation, [validationKey]: false });
      else setValidation({ ...validation, [validationKey]: true });

      if (key == "mobile")
        if (!Util.validateMobile(value))
          setValidation({ ...validation, [validationKey]: false });
        else setValidation({ ...validation, [validationKey]: true });

      if (key == "email")
        if (!Util.validateEmail(value))
          setValidation({ ...validation, [validationKey]: false });
        else setValidation({ ...validation, [validationKey]: true });

      if (key == "confirmPassword") {
        if (value !== input["password"])
          setValidation({ ...validation, [validationKey]: false });
        else setValidation({ ...validation, [validationKey]: true });
      }
    });
  },
  validateEmail: (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  },
  validateMobile: (mobile) => {
    return String(mobile)
      .toLowerCase()
      .match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g);
  },
};

export default Util;
