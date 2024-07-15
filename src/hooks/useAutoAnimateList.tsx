import { useAutoAnimate } from "@formkit/auto-animate/react";

function useAutoAnimateList() {
  const [listRef] = useAutoAnimate();

  return listRef;
}

export default useAutoAnimateList;
