import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-3-215-249-153.compute-1.amazonaws.com:9000",
});

export const feedApi = {
  thumbnails: () => api.get(""), // home
  postingDetail: (id, type) =>
    api.get("api/posting", {
      params: {
        id,
        type_id: type,
      },
    }),
};
