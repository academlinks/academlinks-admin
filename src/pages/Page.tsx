import React from "react";
import { Outlet } from "react-router-dom";

import ContentLayout from "../components/ContentLayout/ContentLayout";
import Navigation from "../components/Navigation/Navigation";

interface PageType {}

const Page: React.FC<PageType> = (props) => {
  return (
    <ContentLayout>
      <Navigation />
      <Outlet />
    </ContentLayout>
  );
};

export default Page;
