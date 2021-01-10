import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-3-215-249-153.compute-1.amazonaws.com:9000",
});

export const feedApi = {
  // fpr home page
  thumbnails: () => api.get(""), // initial call at home
  infinite: () => api.get("api/inf"), // call when infinite scroll is moved
  trending: () => api.get("contents/trending"), // 하루동안 조회수 증가순 & 최신순
  category: (category) =>
    api.get("api/sidebar", {
      params: {
        category,
      },
    }), // side bar category

  // for posting detail page
  postingDetail: (id, type) =>
    api.get("contents/posting", {
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
  recomments: (id, co_id) =>
    api.get("api/recomment", {
      params: {
        id, //content_id
        co_id, //comment_id
      },
    }),
  recommend: (category) =>
    api.get("api/recommend", {
      params: {
        category,
      },
    }),
};
