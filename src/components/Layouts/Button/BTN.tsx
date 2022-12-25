import React from "react";

import { Button } from "./btn.styles";

interface BTNType {
  primary?: boolean;
  label: string;
  task?: TaskT;
}

export type TaskT = "cancel" | "delete" | "aprove";

const BTN: React.FC<BTNType> = ({ primary = true, label, task = "aprove" }) => {
  return primary ? (
    <Button task={task}>{label}</Button>
  ) : (
    <Button task={task}>{label}</Button>
  );
};

export default BTN;
