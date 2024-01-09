import { util } from "../../constants/api.constant";
import { http } from "../../constants/http";

let departmentService = {
  createDepart: async (body) => {
    return await http.post(`${util.baseUrl}department/`, body,  {
      headers: util.getAuthorizedHeaders(),
    });
  },
  getAllDepart: async () => {
    return await http.get(`${util.baseUrl}department/`, {
      headers: util.getAuthorizedHeaders(),
    });
  },
  deleteDepart: async (id) => {
    return await http.put(`${util.baseUrl}department/delete/${id}`, null,  {
      headers: util.getAuthorizedHeaders(),
    });
  },
  createLevel: async (body) => {
    return await http.post(`${util.baseUrl}level/`, body,  {
      headers: util.getAuthorizedHeaders(),
    });
  },
  getAllLevel: async () => {
 return await http.get(`${util.baseUrl}level/`, {
      headers: util.getAuthorizedHeaders(),
    });
  },
  deleteLevel: async (id) => {
    return await http.put(`${util.baseUrl}level/delete/${id}`, null,  {
      headers: util.getAuthorizedHeaders(),
    });
  },
  createFaculty: async (body) => {
    return await http.post(`${util.baseUrl}faculty/`, body,  {
      headers: util.getAuthorizedHeaders(),
    });
  },
  getAllFaculty: async () => {
    return await http.get(`${util.baseUrl}faculty/`, {
      headers: util.getAuthorizedHeaders(),
    });
  },
  deleteFaculty: async (id) => {
    return await http.put(`${util.baseUrl}faculty/delete/${id}`, null,  {
      headers: util.getAuthorizedHeaders(),
    });
  },
};

export { departmentService };

