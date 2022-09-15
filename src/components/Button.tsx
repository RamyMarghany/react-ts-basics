import React from "react";

type ButtonProps = {
  clickHandler: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
  styles: React.CSSProperties;
};

export const Button = ({ clickHandler, styles }: ButtonProps) => {
  return (
    <button onClick={(event) => clickHandler(event, 1)} style={styles}>
      Click
    </button>
  );
};
