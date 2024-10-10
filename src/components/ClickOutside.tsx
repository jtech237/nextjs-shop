"use client"
import { cn } from "@/lib/utils";
import React, { useCallback, useLayoutEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  exceptionRef?: React.RefObject<HTMLElement>;
}

const ClickOutside: React.FC<Props> = ({
  children,
  exceptionRef,
  onClick,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Handler for mouse clicks outside the component or Escape key
  const clickHandler = useCallback(
    (e: MouseEvent | TouchEvent) => {
      const targetNode = e.target as Node;

      const isClickInsideRef = ref.current?.contains(targetNode);
      const isClickInsideException =
        exceptionRef?.current?.contains(targetNode) ||
        exceptionRef?.current === targetNode;

      if (!isClickInsideRef && !isClickInsideException) {
        onClick();
      }
    },
    [onClick, exceptionRef]
  );

  // Handler for Escape key press
  const keyHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClick();
      }
    },
    [onClick]
  );

  useLayoutEffect(() => {
    // Add event listeners for both click and escape key
    document.addEventListener("mousedown", clickHandler);
    // document.addEventListener("touchstart", clickHandler); // For mobile support
    document.addEventListener("keydown", keyHandler);

    // Cleanup listeners on component unmount
    return () => {
      document.removeEventListener("mousedown", clickHandler);
      // document.removeEventListener("touchstart", clickHandler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, [clickHandler, keyHandler]);
  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
};

export default ClickOutside;
