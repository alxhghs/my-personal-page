import React from "react";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import "./layout.css";
import { Header } from "../components";
import { siteMetadata } from "../siteMetadata";
import { Colors, ThemeProvider, useTheme } from "../theme/ThemeProvider";

const Wrapper = styled.div({
  display: "grid",
  grid: "1fr auto / auto",
  fontFamily: "sans-serif",
  minHeight: "100%",
  position: "relative",
});

const Footer = styled.footer({
  backgroundColor: "#000",
  color: "white",
  width: "100%",
  bottom: 0,
  textAlign: "center",
  padding: "16px 0 32px",
});

const Main = styled.main<Colors>(({ colors }) => ({
  backgroundColor: colors.mainBackground,
  padding: "32px 0",
  color: colors.text,
  marginTop: 68,
}));

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <ThemeProvider>
    <Inner>{children}</Inner>
  </ThemeProvider>
);

const Inner: React.FC<LayoutProps> = ({ children }) => {
  const { colors } = useTheme();
  const location = useLocation();

  return (
    <Wrapper>
      <Header path={location.pathname} />
      <Main colors={colors}>{children}</Main>
      <Footer>
        © {new Date().getFullYear()} | {siteMetadata.author}
      </Footer>
    </Wrapper>
  );
};

export default Layout;
