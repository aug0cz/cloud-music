import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  PropsWithChildren,
} from "react";

import BScroll, { TranslaterPoint } from "@better-scroll/core";
import styled from "styled-components";

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

type ScrollProps = {
  direction?: "vertical" | "horizontal";
  click?: boolean;
  refresh?: boolean;
  pullUpLoading?: boolean;
  pullDownLoading?: boolean;
  bounceTop?: boolean;
  bounceBottom?: boolean;
  onScroll?: (scroll: any) => void;
  pullUp?: () => void;
  pullDown?: () => void;
};

const Scroll = forwardRef<any, PropsWithChildren<ScrollProps>>((props, ref) => {
  const [bScroll, setBScroll] = useState<BScroll | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const {
    direction = "vertical",
    click = true,
    refresh = true,
    bounceTop = true,
    bounceBottom = true,
  } = props;

  // methods
  const { pullUp, pullDown, onScroll } = props;

  useEffect(() => {
    // 初始化
    const scroll = new BScroll(scrollContainerRef.current!, {
      scrollX: direction === "horizontal",
      scrollY: direction === "vertical",
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom,
      },
    });
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 绑定 onScroll 事件回调API
  useEffect(() => {
    if (!bScroll || !onScroll) return;
    bScroll.on("scroll", (scroll: any) => {
      // console.log("scroll", scroll);

      onScroll(scroll);
    });
    return () => {
      bScroll.off("scroll");
    };
  }, [onScroll, bScroll]);

  // 绑定 pullUp 事件回调API
  useEffect(() => {
    if (!bScroll || !pullUp) return;
    bScroll.on("scrollEnd", () => {
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUp();
      }
    });
    return () => {
      bScroll.off("scrollEnd");
    };
  }, [pullUp, bScroll]);

  // 绑定 pullDown 事件回调API
  useEffect(() => {
    if (!bScroll || !pullDown) return;
    bScroll.on("touchEnd", (pos: TranslaterPoint) => {
      if (pos.y > 50) {
        pullDown();
      }
    });
    return () => {
      bScroll.off("touchEnd");
    };
  }, [pullDown, bScroll]);

  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  // 定制上层ref 返回内容
  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },
    getBScroll() {
      if (bScroll) {
        return bScroll;
      }
    },
  }));

  return (
    <ScrollContainer ref={scrollContainerRef}>{props.children}</ScrollContainer>
  );
});

export default Scroll;
