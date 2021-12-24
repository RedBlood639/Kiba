import React from "react";
import { Header } from "ui/templates/Header";
import { AppLayout } from "./Layout.styled";

const Layout: React.FC = ({ children }) => {
  return (
    <AppLayout>
      <Header />
      {children}
    </AppLayout>
  );
};

export default Layout;
