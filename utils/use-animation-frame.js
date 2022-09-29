import { useCallback, useRef, useEffect } from "react";

const useAnimationFrame = (enabled, callback) => {
  const requestRef = useRef();

  const animate = useCallback(() => {
    callback();
    requestRef.current = requestAnimationFrame(animate);
  }, [callback]);

  useEffect(() => {
    if (enabled) {
      requestRef.current = requestAnimationFrame(animate);
      return () => {
        if (requestRef.current) {
          return cancelAnimationFrame(requestRef.current);
        }
      };
    }
  }, [enabled, animate]);
};

export default useAnimationFrame;
