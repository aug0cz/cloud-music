export interface IBanner {
  imageUrl: string;
  targetId: number;
  adid: number | null;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url: string;
  exclusive: boolean;
  monitorImpress: number | null;
  monitorClick: number | null;
  monitorType: number | null;
  monitorImpressList: number | null;
  monitorClickList: number | null;
  monitorBlackList: number | null;
  extMonitor: number | null;
  extMonitorInfo: number | null;
  adSource: number | null;
  adLocation: number | null;
  adDispatchJson: number | null;
  encodeId: string;
  program: number | null;
  event: number | null;
  video: number | null;
  song: number | null;
  scm: string;
}

interface Response<T> {
  banners: T[];
  code: number;
}

export type BannerResponse = Response<IBanner>;
