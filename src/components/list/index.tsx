import React, { memo } from "react";

import LazyLoad from "react-lazyload";

import { getCount } from "../../api/utils";
import { ListWrapper, ListItem, List } from "./style";

import type { IRecommend } from "../../types/api/recommend";

import Music from "./music.png";

// export interface IRecommend {
//   id: number;
//   picUrl: string;
//   playCount: number;
//   name: string;
// }

type RecommendListProps = {
  recommendList: IRecommend[];
};

const RecommendList: React.FC<RecommendListProps> = (props) => {
  const { recommendList } = props;
  return (
    <ListWrapper>
      <h1 className="title">推荐歌单</h1>
      <List>
        {recommendList.map((item, idx) => {
          return (
            <ListItem key={item.id}>
              <div className="img_wrapper">
                <div className="decorate"></div>
                <LazyLoad
                  placeholder={
                    <img width="100%" height="100%" src={Music} alt="music" />
                  }
                >
                  <img
                    src={item.picUrl + "?param=300x300"}
                    width="100%"
                    height="100%"
                    alt="music"
                  />
                </LazyLoad>

                <div className="play_count">
                  <i className="iconfont play">&#xe885;</i>
                  <span className="count">{getCount(item.playCount)}</span>
                </div>
              </div>
              <div className="desc">{item.name}</div>
            </ListItem>
          );
        })}
      </List>
    </ListWrapper>
  );
};

export default memo(RecommendList);
