import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-3-215-249-153.compute-1.amazonaws.com:9000",
});

export const feedApi = {
  // fpr home page
  thumbnails: () => api.get(""), // initial call at home
  infinite: () => api.get("api/inf"), // call when infinite scroll is moved
  trending: () => api.get("api/likes"), // likes 높은 순
  category: (category) =>
    api.get("api/sidebar", {
      params: {
        category,
      },
    }), // side bar category

  // for posting detail page
  postingDetail: (id, type_id) =>
    api.get("contents/posting", {
      params: {
        id,
        type_id,
      },
    }),
  blur: (id, type_id) =>
    api.get("api/blur", {
      params: {
        id,
        type_id,
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
  recommend: (id, category) =>
    api.get("api/recommend", {
      params: {
        id,
        category,
      },
    }),
};

export const searchApi = {
  allPosts: (term) =>
    api.get("api/search_all", {
      params: {
        search: term,
      },
    }),
  people: (name) =>
    api.get("api/search_people", {
      params: {
        search: name,
      },
    }),
  posts: (term, type_id) =>
    api.get("api/search", {
      params: {
        search: term,
        type_id,
      },
    }),
};
