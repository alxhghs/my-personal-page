import React from "react";
// import { Link, SEO, ProfileImage } from "../components";
import { Colors, useTheme } from "../theme";
import Link from "next/link";
import { ProfileImage } from "components/ProfileImage";

// const Wrapper = styled.div({
//     display: "grid",
//     alignContent: "center",
//     justifyContent: "center",
//     textAlign: "center",
//     height: "100%",
// });

// const Links = styled.div<Colors>(({ colors }) => ({
//     display: "flex",
//     justifyContent: "center",
//     marginTop: 45,
//     a: {
//         color: colors.text,
//         "&:hover": {
//             color: colors.textLinkHover,
//             textDecoration: "underline",
//         },
//     },
// }));

// const ExternalLink = styled.a({
//     color: "black",
//     textDecoration: "none",
//     marginRight: 15,
// });

// ExternalLink.defaultProps = {
//     target: "__blank",
//     rel: "noopener",
// };

export default function Index() {
    const { colors } = useTheme();
    return (
        <div className="wrapper">
            {/* <SEO /> */}
            <ProfileImage height="200px" width="200px" />
            <h3>hello, world!</h3>
            <p>My name is Alex and I am a software engineer.</p>
            <div className="links">
                <a
                    target="_blank"
                    rel="noopener"
                    className="external-link"
                    href="https://github.com/alxhghs"
                >
                    Github
                </a>
                <a
                    target="_blank"
                    rel="noopener"
                    className="external-link"
                    href="https://www.linkedin.com/in/alxhughes/"
                >
                    LinkedIn
                </a>
                <Link href="/resume">
                    <a>Resume</a>
                </Link>
            </div>
            <style jsx>{`
                .wrapper {
                    display: grid;
                    align-content: center;
                    justify-content: center;
                    text-align: center;
                    height: 100%;
                }
                .external-link {
                    color: black;
                    text-decoration: none;
                }
                .links {
                    display: grid;
                    justify-content: center;
                    margin-top: 45px;
                    gap: 16px;
                    grid-template-columns: repeat(3, auto);
                }
                .links a {
                    color: ${colors.text};
                }
                .links a:hover {
                    // color: colors.textLinkHover,
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
}
