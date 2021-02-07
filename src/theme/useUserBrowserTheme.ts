import { useState } from "react";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export const useUserBrowserTheme = () => {
    const canMatch = Boolean(window?.matchMedia);

    const prefersDark =
        canMatch && window.matchMedia(`(prefers-color-scheme: ${Theme.DARK})`);

    const prefersLight =
        canMatch && window.matchMedia(`(prefers-color-scheme: ${Theme.LIGHT})`);

    const initialTheme =
        (prefersLight &&
            prefersDark &&
            (prefersDark.matches
                ? Theme.DARK
                : prefersLight.matches
                ? Theme.LIGHT
                : null)) ||
        null;

    const [theme, setTheme] = useState<Theme | null>(initialTheme);

    const checkDark = (e: MediaQueryListEvent) => {
        if (e.matches) {
            setTheme(Theme.DARK);
        } else {
            setTheme(Theme.LIGHT);
        }
    };

    const checkLight = (e: MediaQueryListEvent) => {
        if (e.matches) {
            setTheme(Theme.LIGHT);
        } else {
            setTheme(Theme.DARK);
        }
    };

    prefersDark && prefersDark.addEventListener("change", checkDark);
    prefersLight && prefersLight.addEventListener("change", checkLight);

    return theme;
};
