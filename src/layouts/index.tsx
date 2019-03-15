
/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import styled from "@emotion/styled";
import { StaticQuery, graphql } from "gatsby"
import "./layout.css";

import { Header } from "../components"

const Wrapper = styled("div")`
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 30px;
    font-family: sans-serif;
    height: 100%;
`;

const Footer = styled("footer")`
    background-color: #000;
    color: white;
    width: 100%;
    bottom: 0;
    text-align: center;
    padding: 15px 0;
`;

const Layout: React.FC = ({ children }) => (
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
        render={data => (
            <Wrapper>
                <Header />
                <main>{children}</main>
                <Footer>
                    © {new Date().getFullYear()} | {data.author ? data.author : "Alex Fenwood Hughes"} 
                </Footer>
            </Wrapper>
        )}
    />
)

export default Layout;
