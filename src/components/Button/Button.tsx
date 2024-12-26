import React from "react";
import { ButtonProps } from "../../types/types";
export const Button: React.FC<ButtonProps> = React.memo (({ increaseCount, count }) => {

  const clickHandler = () => {
    increaseCount(count);
  }

  return (
    <button className="button" onClick={clickHandler}>
      {count}
    </button>
  );
}
);
