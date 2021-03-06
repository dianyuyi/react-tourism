import { useEffect, useState } from "react";
// memo: https://sasacode.wordpress.com/2019/12/11/intersection-observer-api-with-react-hook/

export const useIntersectionObserver = (
  ref,
  { threshold, root, rootMargin }
) => {
  // configure the state
  // const [targetState, setTargetState] = useState(false);

  // const options = {
  //   threshold: threshold || 0,
  //   root: root || null,
  //   rootMargin: rootMargin || "0%",
  // };

  const [targetState, setTargetState] = useState({
    inView: false,
    triggered: false,
    entry: undefined,
    isDataEnd: false,
  });

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      // checks to see if the element is intersecting

      // console.log(entries);
      if (entries && entries[0].isIntersecting) {
        setTargetState({
          inView: true,
          triggered: true,
          observer: observerInstance,
          isDataEnd: false,
        });
        // unobserve the element
      } else {
        setTargetState({
          inView: false,
          triggered: false,
          observer: observerInstance,
          isDataEnd: true,
        });
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
    if (ref.current && !targetState.triggered) {
      observer.observe(ref.current);
    }
  }, []);
  return [targetState, setTargetState];
};
