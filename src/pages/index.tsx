import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { Link, SEO, ProfileImage } from "../components";

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
        color: gray;
    }
`;

type Props = {
    data: {
        contentfulProfilePicture: {
            picture: {
                fluid: {
                    src: string;
                    base64: string;
                }
            }
        }
    }
}

const App: React.FC<Props> = ({ data }) => {
    const src = data && data.contentfulProfilePicture.picture.fluid.src;
    const base64 = data && data.contentfulProfilePicture.picture.fluid.base64;
    return (
        <Wrapper>
        <SEO />
            <ProfileImage profilePicture={src} profilePictureLowResolution={base64} />
            <h3>hello, world!</h3>
            <p>My name is Alex and I am a sofware engineer.</p>
            <Links>
                <ExternalLink href="https://github.com/alxhghs">Github</ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/alxhughes/">LinkedIn</ExternalLink>
                <Link to="/resume" color="black" hovercolor="gray">Resume</Link>
            </Links>
        </Wrapper>
    );
};

export const profilePictureQuery = graphql`
    {
        contentfulProfilePicture {
            picture {
                fluid(maxWidth: 300) {
                    src
                    base64
                }
            }
        }
    }
`;

export default App;
