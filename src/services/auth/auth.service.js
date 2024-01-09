import { util } from "../../constants/api.constant";
import { http } from "../../constants/http";

let authService = {
  login: async (body) => {
    return await http.post(`${util.baseUrl}auth/login`, body, util.getHeaders(),
    );
  },
  createUser: async (body) => {
    return await http.post(`${util.baseUrl}auth/create`, body, util.getHeaders(),
    );
  },
  deleteUser: async (id) => {
    return await http.put(`${util.baseUrl}user/delete/${id}`, null,
       util.getAuthorizedHeaders(),
    );
  },
  getAll: async () => {
    return await http.get(`${util.baseUrl}user/`,  util.getAuthorizedHeaders(),);
  },
};

export { authService };

