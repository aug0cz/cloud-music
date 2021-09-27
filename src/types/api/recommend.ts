export interface IRecommend {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}

export interface Response<T> {
  hasTaste: boolean;
  code: number;
  category: number;
  result: T[];
}

export type RecommendResponse = Response<IRecommend>;
