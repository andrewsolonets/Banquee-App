import React, { useRef, useContext } from "react";
import { ScrollContext } from "../../utils/scroll-observer";

export const TileContext = React.createContext({
  numOfPages: 0,
  currentPage: 0,
});

export const TileWrapper = ({ children, numOfPages }) => {
  const refContainer = useRef(null);
  const { scrollY } = useContext(ScrollContext);
  const { current: elContainer } = refContainer;

  let currentPage = 0;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight; // header
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    currentPage = percentY * numOfPages;
  }

  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <div
        ref={refContainer}
        className="relative pb-20 2xl:pb-40"
        style={{ height: numOfPages * 100 + "vh" }}
      >
        {children}
      </div>
    </TileContext.Provider>
  );
};

export const TileBackground = ({ children }) => {
  return <div className="absolute h-full w-full">{children}</div>;
};

export const TileContent = ({ children }) => {
  return (
    <div className="sticky top-6 h-screen overflow-hidden md:top-16 ">
      {children}
    </div>
  );
};

export const Tile = ({ page, renderContent }) => {
  const { currentPage, numOfPages } = useContext(TileContext);
  const progress = Math.max(0, currentPage - page);
  const refContainer = useRef(null);

  let opacity = Math.min(1, Math.max(0, progress * 4));

  if (progress > 0.85 && page < numOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4);
  }
  return (
    <div
      ref={refContainer}
      className="absolute top-16 w-full"
      style={{
        pointerEvents: progress >= 0 || progress >= 1 ? "none" : undefined,
        opacity,
      }}
    >
      {renderContent({ progress })}
    </div>
  );
};
