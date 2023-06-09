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
