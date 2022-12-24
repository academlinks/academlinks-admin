import React from "react";
import { LayoutContainer } from "./layout.styles";

interface ContentLayoutType {
  children: React.ReactNode;
}

const ContentLayout: React.FC<ContentLayoutType> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default ContentLayout;
