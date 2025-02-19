import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { SEO, ProfileImage } from "../components";
import { Colors, useTheme } from "../theme";

const Wrapper = styled.div({
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "100%",
});

const Links = styled.div<Colors>(({ colors }) => ({
    display: "flex",
    justifyContent: "center",
    marginTop: 45,
    a: {
        color: colors.text,
        "&:hover": {
            color: colors.textLinkHover,
            textDecoration: "underline",
        },
    },
}));

const ExternalLink = styled.a({
    color: "black",
    textDecoration: "none",
    marginRight: 15,
});

ExternalLink.defaultProps = {
    target: "__blank",
    rel: "noopener",
};

const App: React.FC = () => {
    const { colors } = useTheme();
    return (
        <Wrapper>
            <SEO />
            <ProfileImage height="200px" width="200px" />
            <h3>hello, world!</h3>
            <p>My name is Alex and I am a software engineer.</p>
            <Links colors={colors}>
                <ExternalLink href="https://github.com/alxhghs">
                    Github
                </ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/alxhughes/">
                    LinkedIn
                </ExternalLink>
                <Link
                    href="/resume"
                    passHref
                >
                    <a style={{ color: "black", textDecoration: "none", marginRight: 15, "&:hover": { color: colors.textLinkHover, textDecoration: "underline" } }}>
                        Resume
                    </a>
                </Link>
            </Links>
        </Wrapper>
    );
};

export default App;
