import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "../theme";
import Switch from "react-switch";
import { Theme } from "../theme/useUserBrowserTheme";
import { RiSunFill } from "react-icons/ri";
import { BsMoon } from "react-icons/bs";

const IconWrapper = styled.div({
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
});

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme, colors, breakpoints } = useTheme();
    const isLoading = typeof window === "undefined";

    if (isLoading || theme === null) {
        return null;
    }

    return (
        <div
            css={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: 8,
                display: "flex",
                [`@media screen and (min-width: ${breakpoints[3]})`]: {
                    right: 16,
                },
                [`@media screen and (min-width: ${breakpoints[4]})`]: {
                    right: 32,
                },
            }}
        >
            <Switch
                checked={theme === Theme.DARK}
                onChange={toggleTheme}
                color="default"
                checkedIcon={
                    <IconWrapper>
                        <BsMoon color={colors.moon} />
                    </IconWrapper>
                }
                uncheckedIcon={
                    <IconWrapper>
                        <RiSunFill color={colors.sun} />
                    </IconWrapper>
                }
                offColor={colors.toggleOff}
                onColor={colors.toggleOn}
            />
        </div>
    );
};
