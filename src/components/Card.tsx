import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Colors, useTheme } from "../theme/ThemeProvider";

const StyledCard = styled(Link)<Colors>(({ colors }) => ({
  display: "grid",
  fontFamily: "sans-serif",
  color: colors.text,
  textDecoration: "none",
  borderRadius: 20,
  overflow: "hidden",
  border: `1px solid ${colors.cardBorder}`,
  padding: 15,
  boxShadow: "0 17.125px 70px -12.125px rgba(0, 0, 0, 0.1)",
  transition: "transform 250ms ease-out, background-color 300ms ease-out",
  backgroundColor: colors.cardBackground,
  "&:hover": {
    transform: "scale(1.03)",
  },
  h3: {
    color: colors.lightText,
    margin: 0,
  },
  h4: {
    color: colors.text,
    fontSize: 12,
    fontStyle: "italic",
  },
}));

type CardProps = {
  to: string;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ to, children }) => {
  const { colors } = useTheme();
  return (
    <StyledCard to={to} colors={colors}>
      {children}
    </StyledCard>
  );
};
