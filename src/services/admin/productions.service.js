import { util } from "../../constants/api.constant";
import { http } from "../../constants/http";
let productionService = {
  createCheckout: async (body) => {
    return await http.post(`${util.endPoint}checkout/create`, body,
    util.getAuthorizedHeaders(),
      );
    },
  getProduction: async () => {
    return await http
      .get(`${util.endPoint}report`, {},util.getAuthorizedHeaders(),)
      .catch((error) => {
        console.log(error);
      });
  },
};
export { productionService };
