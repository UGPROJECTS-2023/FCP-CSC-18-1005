import { util } from "../../constants/api.constant";
import { http } from "../../constants/http";

let studentService = {
  createStudent: async (body) => {
    return await http.post(`${util.baseUrl}student/`, body,  {
      headers: util.getAuthorizedHeaders(),
    });
  },
  upload: async (body) => {
    return await http.post(`${util.baseUrl}upload/`, body,  {
      headers: util.getAuthorizedFileHeaders()
    });
  },
  getAllStudent: async () => {
    return await http.get(`${util.baseUrl}student`,{},{headers:  util.getAuthorizedHeaders()});
  },
  deleteStudent: async (id) => {
    return await http.put(`${util.baseUrl}student/delete/${id}`, null, {headers: util.getAuthorizedHeaders()});
  },
}
export { studentService };