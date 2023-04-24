import apiRequestHandler from "./apiRequestHandler";

const BASE_URL = "/identity-service/1.0.0";

export default {
  login: async (email, password) => {
    return apiRequestHandler({
      url: BASE_URL + "/login",
      method: "post",
      data: { email, password },
    });
  },
};
