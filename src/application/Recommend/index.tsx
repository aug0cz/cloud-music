import React, { memo, useEffect } from "react";
import { forceCheck } from "react-lazyload";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import Slider from "../../components/slider";
import RecommendList from "../../components/list";
import Scroll from "../../baseUI/scroll";
import Loading from "../../baseUI/loading";

import {
  selectBannerList,
  selectRecommendList,
  selectEnterLoading,
  changeEnterLoading,
} from "../../store/features/recommend/slice";
import {
  getBannerList,
  getRecommendList,
} from "../../store/features/recommend/services";

import { Content } from "./style";

const Recommend: React.FC = () => {
  const dispatch = useAppDispatch();

  const recommendList = useAppSelector(selectRecommendList);
  const bannerList = useAppSelector(selectBannerList);
  const enterLoading = useAppSelector(selectEnterLoading);

  useEffect(() => {
    if (recommendList.length < 1) {
      dispatch(getRecommendList());
    }
    if (bannerList.length < 1) {
      dispatch(getBannerList());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refresh = () => {
    dispatch(changeEnterLoading(true));
    dispatch(getRecommendList());
  };

  return (
    <Content>
      {enterLoading ? <Loading /> : null}
      <Scroll onScroll={forceCheck} pullDown={refresh}>
        <div>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList}></RecommendList>
        </div>
      </Scroll>
    </Content>
  );
};

export default memo(Recommend);
