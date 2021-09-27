import React, { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Slider from "../../components/slider";
import RecommendList from "../../components/list";
import Scroll from "../../baseUI/scroll";

import {
  selectBannerList,
  selectRecommendList,
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

  useEffect(() => {
    dispatch(getBannerList());
    dispatch(getRecommendList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Content>
      <Scroll>
        <div>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList}></RecommendList>
        </div>
      </Scroll>
    </Content>
  );
};

export default memo(Recommend);
