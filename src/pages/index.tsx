import React from "react";
import styled from "@emotion/styled";
import { Link, SEO, ProfileImage } from "../components";
import { colors } from "../constants";

const Wrapper = styled("div")`
    display: grid;
    align-content: center;
    justify-content: center;
    text-align: center;
    height: 100%;
`;

const Links = styled("div")`
    display: flex;
    justify-content: center;
    margin-top: 45px;
`;

const ExternalLink = styled("a")`
    color: black;
    text-decoration: none;
    margin-right: 15px;
    &:hover { 
        color: ${colors.gray};
    }
`;

const App: React.FC = () => {
    return (
        <Wrapper>
            <SEO />
            <ProfileImage height="200px" width="200px" />
            <h3>hello, world!</h3>
            <p>My name is Alex and I am a sofware engineer.</p>
            <Links>
                <ExternalLink href="https://github.com/alxhghs">Github</ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/alxhughes/">LinkedIn</ExternalLink>
                <Link to="/resume" color="black" hovercolor={colors.gray}>Resume</Link>
            </Links>
        </Wrapper>
    )
};

export default App;
