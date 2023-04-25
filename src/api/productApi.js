import apiRequestHandler from "./apiRequestHandler";

const BASE_URL = "/product-service/1.0.0";

export default {
  getProducts: async () => {
    return apiRequestHandler({
      url: BASE_URL + "/api/products",
      method: "get",
      headers: {
        authorization: `barear ${localStorage.getItem("token")}`,
      },
    });
  },
  getCategories: async () => {
    return apiRequestHandler({
      url: BASE_URL + "/api/categories",
      method: "get",
      headers: {
        authorization: `barear ${localStorage.getItem("token")}`,
      },
    });
  },
  addCategory: async (name, desc) => {
    return apiRequestHandler({
      url: BASE_URL + "/api/categories",
      method: "post",
      data: {
        name,
        desc,
      },
      headers: {
        authorization: `barear ${localStorage.getItem("token")}`,
      },
    });
  },
  getOrderById: async (orderId) => {
    return apiRequestHandler({
      url: BASE_URL + "/:orderId",
      method: "get",
      data: { orderId },
    });
  },
  updateOrderById: async (orderId, order) => {
    return apiRequestHandler({
      url: BASE_URL + "/:orderId",
      method: "get",
      data: { orderId },
    });
  },
  deleteOrderById: async (orderId) => {
    return apiRequestHandler({
      url: BASE_URL + "/:orderId",
      method: "orderId",
      data: { orderId },
    });
  },

  cancelOrderById: async (orderId) => {
    return apiRequestHandler({
      url: BASE_URL + "/:orderId/cancel",
      method: "orderId",
      data: { orderId },
    });
  },
};
