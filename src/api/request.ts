import { http } from "./config";
import type { IRecommend, RecommendResponse } from "../types/api/recommend";
import type { IBanner, BannerResponse } from "../types/api/banner";

export const getBannerRequest = async () =>
  await http.get<IBanner[], BannerResponse>("/banner");
export const getRecommendListRequest = async () =>
  await http.get<IRecommend[], RecommendResponse>("/personalized");
