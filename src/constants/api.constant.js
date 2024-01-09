import { storage } from "./storage";
export const TOKEN_TYPE = "Bearer ";
export const REQUEST_HEADER_AUTH_KEY = "Authorization";

function Util() {
  this.baseUrl = 'http://localhost:5009/api/v1/';
  this.getHeaders = () => {
      return {
          'Content-Type': 'application/json',
          Accept: 'application/json; charset=utf-8',
      }
  }
  this.getAuthorizedHeaders = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json; charset=utf-8",
      Authorization: `Bearer ${storage.get("adminToken")}`,
    };
  };
  this.getAuthorizedFileHeaders = () => {
      return {
        "Content-Type": "multipart/form-data", 
      Accept: "application/json; charset=utf-8",
      Authorization: `Bearer ${storage.get("adminToken")}`,
      }
  }
}
const util = new Util()
export { util }