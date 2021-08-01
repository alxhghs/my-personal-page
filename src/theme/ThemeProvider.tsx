import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import dayjs from "dayjs";
import { darkModeColors, lightModeColors } from "./colors";
import { breakpoints } from "./breakpoints";
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
    const [theme, setTheme] = useState<Theme>(Theme.DARK);
    const colors = theme === Theme.DARK ? darkModeColors : lightModeColors;

    const toggleTheme = () => {
        setTheme((theme) => {
            if (theme === Theme.DARK) {
                return Theme.LIGHT;
            }
            return Theme.DARK;
        });
    };

    const userTheme = useUserBrowserTheme();

    useEffect(() => {
        const now = dayjs();
        const isDay = now.hour() > 7 && now.hour() < 19;
        const timeBasedTheme = isDay ? Theme.LIGHT : Theme.DARK;
        userTheme ? setTheme(userTheme) : setTheme(timeBasedTheme);
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
