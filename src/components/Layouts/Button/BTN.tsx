import React from "react";

import { Button } from "./btn.styles";

interface BTNType {
  primary?: boolean;
  label: string;
  task?: TaskT;
  className?: string;
  type?: "submit" | "button";
}

export type TaskT = "cancel" | "delete" | "aprove";

const BTN: React.FC<BTNType> = ({
  type = "button",
  primary = true,
  label,
  task = "aprove",
  className,
}) => {
  return primary ? (
    <Button task={task} type={type} className={className || ""}>
      {label}
    </Button>
  ) : (
    <Button task={task} type={type} className={className || ""}>
      {label}
    </Button>
  );
};

export default BTN;
