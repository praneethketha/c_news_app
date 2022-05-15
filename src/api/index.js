import axios from "axios";

//fetching using axios
export const fetchNews = (country) =>
  axios.get(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=0f50a7af915e40cdb03971d419465dfd`
  );
