import { useEffect, useRef } from "react";

function useFocus() {
  const focusRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  return focusRef;
}

export default useFocus;
