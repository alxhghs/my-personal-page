import { useTheme } from "../theme";
import Switch from "@material-ui/core/Switch";
import { Theme } from "../theme/useUserBrowserTheme";
import { MdWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import React from "react";

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme, colors, breakpoints, setTheme } = useTheme();
    return (
        <div
            css={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: 8,
                border: colors.cardBorder,
                display: "flex",
                alignItems: "center",
                "&:hover": { cursor: "pointer" },
                [`@media screen and (min-width: ${breakpoints[3]})`]: {
                    right: 16,
                },
                [`@media screen and (min-width: ${breakpoints[4]})`]: {
                    right: 32,
                },
            }}
        >
            <MdWbSunny onClick={() => setTheme(Theme.LIGHT)} />
            <Switch
                checked={theme === Theme.DARK}
                onChange={toggleTheme}
                color="default"
            />
            <FiMoon onClick={() => setTheme(Theme.DARK)} />
        </div>
    );
};
