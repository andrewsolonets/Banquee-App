import React, { useCallback, useContext, useRef } from "react";
import { SizeContext } from "../utils/size-observer";
import useAnimationFrame from "../utils/use-animation-frame";

const SliderContainer = ({
  children,
  initialOffsetX,
  className,
  contentWidth,
}) => {
  const { innerWidth } = useContext(SizeContext);
  const refScrollX = useRef(initialOffsetX);
  const refContainer = useRef(null);
  const refContent = useRef(null);

  const enabled = innerWidth < contentWidth;

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer;
      const { current: elContent } = refContent;
      if (elContainer && elContent) {
        refScrollX.current += 0.5;
        elContainer.scrollLeft = refScrollX.current;
        if (elContainer.scrollLeft >= elContent.clientWidth) {
          refScrollX.current = 0;
          elContainer.scrollLeft = 0;
        }
      }
    }, [])
  );

  return (
    <div
      ref={refContainer}
      className={`slider-container pointer-events-none max-w-full overflow-x-hidden  whitespace-nowrap ${className}`}
    >
      <div ref={refContent} className="inline-flex">
        {children}
      </div>
      <div className={enabled ? "inline-flex" : "hidden"}>{children}</div>
    </div>
  );
};

export const SliderItem = ({ children, width }) => {
  return (
    <div className="mx-2 inline-flex h-16" style={{ width }}>
      {children}
    </div>
  );
};

export default SliderContainer;
