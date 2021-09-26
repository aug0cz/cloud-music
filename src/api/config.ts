import axios from "axios";

export const baseUrl = "";

const http = axios.create({
  baseURL: baseUrl,
});

http.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err, "网络错误");
  }
);

export { http };
