import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBannerRequest,
  getRecommendListRequest,
} from "../../../api/request";

export const getBannerList = createAsyncThunk(
  "recommend/getBannerList",
  async () => await getBannerRequest()
);

export const getRecommendList = createAsyncThunk(
  "recommend/getRecommendList",
  async () => await getRecommendListRequest()
);
