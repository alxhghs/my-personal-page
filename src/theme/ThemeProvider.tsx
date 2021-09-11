import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
} from "react";
import dayjs from "dayjs";
import { darkModeColors, lightModeColors } from "./colors";
import { breakpoints } from "./breakpoints";
import { Theme, useUserBrowserTheme } from "./useUserBrowserTheme";
import { useLocalStorage } from "../hooks/useLocalStorage";

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
    const [theme, setTheme] = useLocalStorage<Theme>({
        key: "theme",
        initialValue: Theme.DARK,
    });
    // const [userThemeOverride, setUserThemeOverride] = useLocalStorage<boolean>({
    //     key: "userThemeOverride",
    //     initialValue: false,
    // });

    const colors = theme === Theme.DARK ? darkModeColors : lightModeColors;

    const toggleTheme = () => {
        // setUserThemeOverride(true);
        setTheme((t) => {
            if (t === Theme.DARK) {
                return Theme.LIGHT;
            }
            return Theme.DARK;
        });
    };

    useEffect(() => {
        // if (userThemeOverride) return;
        const now = dayjs();
        const isDay = now.hour() > 7 && now.hour() < 19;
        const timeBasedTheme = isDay ? Theme.LIGHT : Theme.DARK;
        setTheme(timeBasedTheme);
    }, []);

    const userTheme = useUserBrowserTheme();

    useEffect(() => {
        // if (userThemeOverride) return;
        userTheme && setTheme(userTheme);
    }, [userTheme]);

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
