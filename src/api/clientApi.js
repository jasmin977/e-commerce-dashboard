import apiRequestHandler from "./apiRequestHandler";

const BASE_URL = "identity-service/1.0.0";

export default {
  getUsers: async () => {
    return apiRequestHandler({
      url: BASE_URL + "/users",
      method: "get",
      headers: {
        authorization: `barear ${localStorage.getItem("token")}`,
      },
    });
  },
  getUserById: async (id) => {
    return apiRequestHandler({
      url: BASE_URL + "/users/:id",
      method: "get",
      data: { id },
    });
  },
  updatUserById: async (user) => {
    return apiRequestHandler({
      url: BASE_URL + "/users/:id",
      method: "put",
      data: { user },
    });
  },
  deleteUserrById: async (id) => {
    return apiRequestHandler({
      url: BASE_URL + "/users/:id",
      method: "delete",
      data: { id },
    });
  },
};
