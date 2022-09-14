import React from "react";

type ButtonProps = {
  clickHandler: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

export const Button = ({ clickHandler }: ButtonProps) => {
  return <button onClick={(event) => clickHandler(event, 1)}>Click</button>;
};
