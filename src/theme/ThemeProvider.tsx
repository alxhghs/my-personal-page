import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import { darkModeColors, lightModeColors } from "./colors";
import { breakpoints } from "./breakpoints";
import dayjs from "dayjs";
import { Theme, useUserBrowserTheme } from "./useUserBrowserTheme";

export type Colors = { colors: typeof lightModeColors };
export type Breakpoints = { breakpoints: typeof breakpoints };

type ThemeValues = {
    toggleTheme: () => void;
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
} & Colors &
    Breakpoints;

const ThemeContext = createContext<ThemeValues>(null!);

export const ThemeProvider: React.FC = ({ children }) => {
    const now = dayjs();
    const isDay = now.hour() > 7 && now.hour() < 19;
    const userBrowserTheme = useUserBrowserTheme();
    const timeBasedTheme = isDay ? Theme.LIGHT : Theme.DARK;
    const [theme, setTheme] = useState<Theme>(
        userBrowserTheme ?? timeBasedTheme,
    );
    const colors = theme === Theme.DARK ? darkModeColors : lightModeColors;

    const toggleTheme = () => {
        setTheme((theme) => {
            if (theme === Theme.DARK) {
                return Theme.LIGHT;
            }
            return Theme.DARK;
        });
    };

    useEffect(() => {
        if (userBrowserTheme && userBrowserTheme !== theme) {
            setTheme(userBrowserTheme);
        }
    }, [userBrowserTheme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                colors,
                breakpoints,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
