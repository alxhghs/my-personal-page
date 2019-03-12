import React from "react";
import styled from "@emotion/styled";
import { Layout, Link, SEO, ProfileImage } from "../components";

const Wrapper = styled("div")`
    display: grid;
    align-content: center;
    justify-content: center;
    text-align: center;
    margin-top: 45px;
`;

const Links = styled("div")`
    display: flex;
    justify-content: center;
    margin-top: 15px;
`;

const ExternalLink = styled("a")`
    color: black;
    text-decoration: none;
    margin-right: 15px;
    &:hover { 
        color: gray;
    }
`;

const App: React.FC = () => (
    <Layout>
        <SEO />
        <Wrapper>
            <ProfileImage />
            <h3>hello, world!</h3>
            <p>My name is Alex and I am a sofware engineer.</p>
            <Links>
                <ExternalLink href="https://github.com/alxhghs">Github</ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/alxhughes/">LinkedIn</ExternalLink>
                <Link to="/resume" color="black" hoverColor="gray">Resume</Link>
            </Links>
        </Wrapper>
    </Layout>
);

export default App;
