import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../index";
import type { IRecommend } from "../../../types/api/recommend";
import type { IBanner } from "../../../types/api/banner";
import { getBannerList, getRecommendList } from "./services";

interface IRecommendState {
  bannerList: IBanner[];
  recommendList: IRecommend[];
}

const initialState: IRecommendState = {
  bannerList: [],
  recommendList: [],
};

export const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBanner: (state, action: PayloadAction<IBanner[]>) => {
      state.bannerList = action.payload;
    },
    changeRecommendList: (state, action: PayloadAction<IRecommend[]>) => {
      state.recommendList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBannerList.fulfilled, (state, action) => {
      state.bannerList = action.payload.banners;
    });

    builder.addCase(getBannerList.rejected, (state, action) => {
      console.log("轮播图数据传输错误", action.error);
    });

    builder.addCase(getRecommendList.fulfilled, (state, action) => {
      state.recommendList = action.payload.result;
    });

    builder.addCase(getRecommendList.rejected, (state, action) => {
      console.log("推荐歌单数据传输错误", action.error);
    });
  },
});

export const selectBannerList = (state: RootState) =>
  state.recommend.bannerList;
export const selectRecommendList = (state: RootState) =>
  state.recommend.recommendList;

export const { changeBanner, changeRecommendList } = recommendSlice.actions;

export default recommendSlice.reducer;
