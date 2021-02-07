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
        prefersLight &&
        prefersDark &&
        (prefersDark.matches
            ? Theme.DARK
            : prefersLight.matches
            ? Theme.LIGHT
            : null);

    const [theme, setTheme] = useState<Theme>(initialTheme as Theme);

    const checkDark = (e: MediaQueryListEvent) => {
        if (e.matches) {
            setTheme(Theme.DARK);
        } else {
            setTheme(Theme.LIGHT);
        }
    };

    prefersDark && prefersDark.addEventListener("change", checkDark);

    return theme;
};
