import { RecommendAction, RecommendActionTypes } from "./actions";
import { produce } from "immer";

const defaultState: IRecommendState = {
  bannerList: [],
  recommendList: [],
};

export default function RecommendReducer(
  state: IRecommendState = defaultState,
  action: RecommendAction
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case RecommendActionTypes.CHANGE_BANNER: {
        draft.bannerList = action.payload.bannerList;
        break;
      }
      case RecommendActionTypes.CHANGE_LIST: {
        draft.recommendList = action.payload.recommendList;
        break;
      }
    }
  });
}

export interface IRecommendState {
  bannerList: object[];
  recommendList: object[];
}
