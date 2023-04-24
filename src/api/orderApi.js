import apiRequestHandler from "./apiRequestHandler";

const BASE_URL = "/orders-service/1.0.0";

export default {
  getOrders: async () => {
    return apiRequestHandler({
      url: BASE_URL + "/all",
      method: "get",
      headers: {
        authorization: `barear ${localStorage.getItem("token")}`,
      },
    });
  },
};
