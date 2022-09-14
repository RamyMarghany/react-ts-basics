import React from "react";

type ParentProps = {
  children: React.ReactNode;
};

export const Parent = ({ children }: ParentProps) => {
  return <div>{children}</div>;
};
