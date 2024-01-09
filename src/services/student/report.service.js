import { util } from "../../constants/api.constant";
import { http } from "../../constants/http";

let reportService = {
  createReport: async (body) => {
    try {
      const response = await http.post(`${util.baseUrl}report/create`, body, {
        headers: util.getAuthorizedHeaders(),
      });
      return response;
    } catch (error) {
      throw error; // Throw the error for it to be caught in the calling function
    }
  },
  uploadPoliceDoc: async (body, id) => {
    try {
      const response = await http.put(`${util.baseUrl}report/upload-police/${id}`, body, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error; // Throw the error for handling in the caller function
    }
  },
  
  uploadCourtDoc: async (body, id) => {
    try {
      const response = await http.put(`${util.baseUrl}report/upload-court/${id}`, body, {
        headers: {
          "Content-Type": "multipart/form-data",// Set content type to multipart/form-data
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error; // Throw the error for handling in the caller function
    }
  },
  
  getReportByReference: async (reference) => {
    return await http.get(`${util.baseUrl}report/student-report/?reference=${reference}`, {
      headers: util.getHeaders(),
    })
      .catch((error) => {
        console.log(error);
      });
  },
  getStudent: async (regNo, phone) => {
    return await http.get(`${util.baseUrl}student/student?regNo=${regNo}&phone=${phone}`, {
      headers: util.getHeaders(),
    })
      .catch((error) => {
        console.log(error);
      });
  },
};
export { reportService };
