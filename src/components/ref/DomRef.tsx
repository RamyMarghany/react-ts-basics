import { useRef, useEffect } from "react";

export const DomRef = () => {
  // When you are sure that your variable will Never has a null value then you can use "null!"
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return <input type="text" ref={inputRef} />;
};
