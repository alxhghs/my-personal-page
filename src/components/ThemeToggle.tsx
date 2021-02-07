import { useTheme } from "../theme";
import DarkModeToggle from "react-dark-mode-toggle";
import { Theme } from "../theme/useUserBrowserTheme";

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme, colors, breakpoints } = useTheme();
    return (
        <DarkModeToggle
            size={50}
            checked={theme === Theme.DARK}
            onChange={toggleTheme}
            speed={2.5}
            css={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: 8,
                border: colors.cardBorder,
                [`@media screen and (min-width: ${breakpoints[3]})`]: {
                    right: 16,
                },
                [`@media screen and (min-width: ${breakpoints[4]})`]: {
                    right: 32,
                },
            }}
        />
    );
};
