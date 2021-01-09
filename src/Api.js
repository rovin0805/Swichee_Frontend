import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-3-215-249-153.compute-1.amazonaws.com:9000",
});

export const feedApi = {
  // fpr home page
  thumbnails: () => api.get(""), // initial call at home
  infinite: () => api.get("api/inf"), // call when infinite scroll is moved
  trending: () => api.get("/api/trending"), // 좋아요 & 최신순
  category: (term) =>
    api.get("api/sidebar", {
      params: {
        term,
      },
    }), // side bar category

  // for posting detail page
  postingDetail: (id, type) =>
    api.get("api/posting", {
      params: {
        id,
        type_id: type,
      },
    }),
  addView: (id) =>
    api.get("api/add", {
      params: {
        id,
      },
    }),
  comments: (id) =>
    api.get("api/comment", {
      params: {
        id,
      },
    }),
  recommend: (category) =>
    api.get("api/recommend", {
      params: {
        category,
      },
    }),
};
