import { util } from "../../constants/api.constant";
import { http } from "../../constants/http";

let reportService = {
      getReports: async () => {
        return await http.get(`${util.baseUrl}report/`, {},
        {
          headers: util.getAuthorizedHeaders(),
        }
          );
        },
        getProduction: async () => {
          return await http.get(`${util.baseUrl}report/production`, {},
          {
            headers: util.getAuthorizedHeaders(),
          }
            );
          },
          getCollected: async () => {
            return await http.get(`${util.baseUrl}report/collection`, {},
            {
              headers: util.getAuthorizedHeaders(),
            }
              );
            },
  getReportByReference: async (body) => {
    return await http.post(`${util.baseUrl}report/`, body, {
      headers: util.getAuthorizedHeaders(),
    })
      .catch((error) => {
        console.log(error);
      });
  },
  securityVerify: async (body, id) => {
    try {
      const response = await http.put(`${util.baseUrl}report/security-verify/${id}`, body, {
        headers: util.getAuthorizedHeaders(),
      });
      return response;
    } catch (error) {
      throw error; // Throw the error for it to be caught in the calling function
    }
  },
  updateProductionStatus: async (body, id) => {
    try {
      const response = await http.put(`${util.baseUrl}report/update-production/${id}`, body, {
        headers: util.getAuthorizedHeaders(),
      });
      return response;
    } catch (error) {
      throw error; // Throw the error for it to be caught in the calling function
    }
  },
updateCollectStatus: async (body, id) => {
    try {
      const response = await http.put(`${util.baseUrl}report/update-collect/${id}`, body, {
        headers: util.getAuthorizedHeaders(),
      });
      return response;
    } catch (error) {
      throw error; // Throw the error for it to be caught in the calling function
    }
  },
  updatePaymentStatus: async (body, id) => {
    try {
      const response = await http.put(`${util.baseUrl}report/update-payment/${id}`, body, {
        headers: util.getAuthorizedHeaders(),
      });
      return response;
    } catch (error) {
      throw error; // Throw the error for it to be caught in the calling function
    }
  },
};
export { reportService };
