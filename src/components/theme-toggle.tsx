import { useTheme } from "../theme";

export const ThemeToggle: React.FC = () => {
    const { toggleTheme } = useTheme();
    return <button onClick={toggleTheme}>Toggle theme</button>;
};
