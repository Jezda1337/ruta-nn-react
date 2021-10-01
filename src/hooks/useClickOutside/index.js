import { useEffect, useRef } from "react";
export const useClickOutside = (el) => {
  const domNode = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!domNode.current.contains(event.target)) {
        el();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return domNode;
};
