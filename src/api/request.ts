import { http } from "./config";

export const getBannerRequest = () => http.get("/banner");
export const getRecommendListRequest = () => http.get("/personalized");
