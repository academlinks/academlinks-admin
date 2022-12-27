import React from "react";

import { Button } from "./btn.styles";

interface BTNType {
  label: string;
  task?: TaskT;
  className?: string;
  type?: "submit" | "button";
  onClick?: () => void;
}

export type TaskT = "cancel" | "delete" | "aprove";

const BTN: React.FC<BTNType> = ({
  type = "button",
  label,
  task = "aprove",
  onClick = () => {},
  className,
}) => {
  return (
    <Button
      task={task}
      type={type}
      className={className || ""}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default BTN;
