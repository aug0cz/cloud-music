import axios from "axios";

export const baseUrl = "https://music-api-five.vercel.app/";

const http = axios.create({
  baseURL: baseUrl,
});

http.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err, "网络错误");
    return Promise.reject(err);
  }
);

export { http };
