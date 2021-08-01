/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import styled from "@emotion/styled";
import { StaticQuery, graphql, Page } from "gatsby";
import "./layout.css";
import { Header } from "../components";
import { Colors, ThemeProvider, useTheme } from "../theme/ThemeProvider";

const Wrapper = styled.div({
    display: "grid",
    grid: "auto 1fr auto / auto",
    fontFamily: "sans-serif",
    height: "100%",
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
}));

const Layout: React.FC<Page> = ({ path, children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                        author
                    }
                }
            }
        `}
        render={(data) => (
            <ThemeProvider>
                <Inner path={path} data={data}>
                    {children}
                </Inner>
            </ThemeProvider>
        )}
    />
);

type InnerProps = {
    path: string;
    data: any;
};
const Inner: React.FC<InnerProps> = ({ data, children, path }) => {
    const { colors } = useTheme();
    return (
        <Wrapper>
            <Header path={path} />
            <Main colors={colors}>{children}</Main>
            <Footer>
                © {new Date().getFullYear()} |{" "}
                {data.author ? data.author : "Alex Fenwood Hughes"}
            </Footer>
        </Wrapper>
    );
};

export default Layout;
