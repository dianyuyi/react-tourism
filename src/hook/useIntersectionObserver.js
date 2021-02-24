import { useEffect, useState } from "react";
// import { useScrollFetch } from "./useScrollFetch";
// memo: https://sasacode.wordpress.com/2019/12/11/intersection-observer-api-with-react-hook/

export const useIntersectionObserver = (
  ref,
  { threshold, root, rootMargin }
) => {
  // configure the state
  const [targetState, setTargetState] = useState({
    inView: false,
    triggered: false,
    entry: undefined,
    isDataEnd: false,
  });

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      // checks to see if the element is intersecting

      if (entries[0].intersectionRatio > 0) {
        // if it is update the state, we set triggered as to not re-observe the element
        setTargetState({
          inView: true,
          triggered: true,
          observer: observerInstance,
          isDataEnd: false,
        });
        // unobserve the element
        if (targetState.isDataEnd) {
          // const { loading, scenicSpot } = useScrollFetch();
          // observerInstance.unobserve(ref.current);
          console.log("data end");
        }
      }
      return;
    },
    {
      threshold: threshold || 0,
      root: root || null,
      rootMargin: rootMargin || "0%",
    }
  );

  useEffect(() => {
    // check that the element exists, and has not already been triggered
    if (ref.current && !targetState.triggered) {
      observer.observe(ref.current);
    }
  });
  return [targetState, setTargetState];
};
