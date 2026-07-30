import React from "react";
import styled, { keyframes } from "styled-components";
import { RiSunFill } from "react-icons/ri";
import { BsMoon } from "react-icons/bs";
import { Theme } from "../theme/useUserBrowserTheme";
import { useTheme } from "../theme";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const TogglePosition = styled.div<{ breakpoint3: string; breakpoint4: string }>(
  ({ breakpoint3, breakpoint4 }) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: 8,
    display: "flex",
    animation: `${fadeIn} 400ms ease-in`,
    [`@media screen and (min-width: ${breakpoint3})`]: {
      right: 16,
    },
    [`@media screen and (min-width: ${breakpoint4})`]: {
      right: 32,
    },
  }),
);

const ToggleButton = styled.button<{ background: string }>(({ background }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 44,
  height: 24,
  borderRadius: 999,
  border: 0,
  cursor: "pointer",
  padding: 0,
  backgroundColor: background,
}));

const Knob = styled.span<{ checked: boolean }>(({ checked }) => ({
  width: 18,
  height: 18,
  borderRadius: "50%",
  display: "grid",
  placeItems: "center",
  transform: checked ? "translateX(10px)" : "translateX(-10px)",
  transition: "transform 200ms ease",
  backgroundColor: "white",
}));

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, colors, breakpoints } = useTheme();
  const isLoading = typeof window === "undefined";

  if (isLoading || theme === null) {
    return null;
  }

  const checked = theme === Theme.DARK;

  return (
    <TogglePosition breakpoint3={breakpoints[3]} breakpoint4={breakpoints[4]}>
      <ToggleButton
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle color theme"
        background={checked ? colors.toggleOn : colors.toggleOff}
      >
        <Knob checked={checked}>
          {checked ? <BsMoon color={colors.moon} size={12} /> : <RiSunFill color={colors.sun} size={12} />}
        </Knob>
      </ToggleButton>
    </TogglePosition>
  );
};
