/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { IoContext } from "../store/IoProvider";
import { useAppSelector } from "../store/hooks";

import ContentLayout from "../components/ContentLayout/ContentLayout";
import Navigation from "../components/Navigation/Navigation";

const Page: React.FC = () => {
  const { adminId, isAuthenticated } = useAppSelector(({ admin }) => admin);
  const { connection } = useContext(IoContext);

  useEffect(() => {
    if (!adminId || !isAuthenticated) return;
    connection({ _id: adminId });
  }, []);

  return (
    <ContentLayout>
      <Navigation />
      <Outlet />
    </ContentLayout>
  );
};

export default Page;
