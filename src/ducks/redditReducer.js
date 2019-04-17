import axios from "axios";

const initialState = {
  loading: false,
  articles: []
};

const REQUEST_ARTICLES = "REQUEST_ARTICLES";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTICLES + "_PENDING":
      return { ...state, loading: true };
    case REQUEST_ARTICLES + "_FULFILLED":
      return { loading: false, articles: action.payload };
    case REQUEST_ARTICLES + "_REJECTED":
      return { ...state, loading: false };
    default:
      return state;
    }
}

export function requestArticles() {
  let articles = axios.get("/api/reddit").then(res => res.data);

  return {
    type: REQUEST_ARTICLES,
    payload: articles
  };
}
