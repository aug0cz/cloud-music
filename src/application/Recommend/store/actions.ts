export enum RecommendActionTypes {
  CHANGE_BANNER = "recommend/change_banner",
  CHANGE_LIST = "recommend/list",
}

export interface IRecommendChangeBanner {
  type: RecommendActionTypes.CHANGE_BANNER;
  payload: {
    bannerList: object[];
  };
}

export interface IRecommendChangeList {
  type: RecommendActionTypes.CHANGE_LIST;
  payload: {
    recommendList: object[];
  };
}

export function changeBannerList(data: object[]): IRecommendChangeBanner {
  return {
    type: RecommendActionTypes.CHANGE_BANNER,
    payload: {
      bannerList: data,
    },
  };
}

export function changeRecommendList(data: object[]): IRecommendChangeList {
  return {
    type: RecommendActionTypes.CHANGE_LIST,
    payload: {
      recommendList: data,
    },
  };
}

export type RecommendAction = IRecommendChangeBanner | IRecommendChangeList;
