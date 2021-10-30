import React from "react";
import { Colors, useTheme } from "../theme/ThemeProvider";
import { useRouter } from "next/dist/client/router";

// const Animation = keyframes`
//     0% {
//         background-position: 0% 82%;
//     }
//     50% {
//         background-position: 100% 19%;
//     }
//     100% {
//         background-position: 0% 82%;
//     }
// `;

// const StyledHeader = styled.header<Colors>(({ colors }) => ({
//     display: "grid",
//     gridTemplateColumns: "repeat(2, auto)",
//     width: "100vw",
//     gap: 32,
//     zIndex: 1,
//     color: colors.headerText,
//     background: `linear-gradient(
//         124deg,
//         #ff2400,
//         #e81d1d,
//         #e8b71d,
//         #e3e81d,
//         #1de840,
//         #1ddde8,
//         #2b1de8,
//         #dd00f3,
//         #dd00f3
//     )`,
//     backgroundSize: "1800% 1800%",
//     justifyContent: "center",
//     animation: `${Animation} 90s ease infinite`,
//     textShadow: `0 0 3px ${colors.textShadow}`,
//     position: "fixed",
// }));

// const StyledH2 = styled.h2<{ underline: boolean }>((props) => ({
//     textDecoration: props.underline ? "underline" : undefined,
//     userSelect: "none",
// }));

export function Header() {
    const { colors } = useTheme();
    const { asPath } = useRouter();

    return (
        <div className="header">
            <h2 className="home">
                {/* <Link
                    color={colors.headerText}
                    to="/"
                    hovercolor={colors.headerHoverText}
                >
                    Home
                </Link> */}
            </h2>
            <h2 className="blog">
                {/* <Link
                    color={colors.headerText}
                    to="/blog"
                    hovercolor={colors.headerHoverText}
                >
                    Blog
                </Link> */}
            </h2>
            {/* <ThemeToggle /> */}
            <style jsx>{`
                .header {
                    display: grid;
                    grid-template-columns: repeat(2; auto);
                    // width: 100vw;
                    // gap: 32;
                    // z-index: 1;
                    // color: ${colors.headerText};
                    // background: linear-gradient(
                    //     124deg #ff2400 #e81d1d #e8b71d #e3e81d #1de840 #1ddde8
                    //         #2b1de8 #dd00f3 #dd00f3
                    // );
                    // background-size: 1800% 1800%;
                    // justify-content: center;
                    // animation: ${Animation} 90s ease infinite;
                    // text-shadow: 0 0 3px ${colors.textShadow};
                    // position: fixed;
                }
            `}</style>
        </div>
    );
}
