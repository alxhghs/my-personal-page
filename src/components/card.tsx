import styled from "@emotion/styled";
import { Link } from "gatsby";
import { lightModeColors } from "../theme";

export const Card = styled(Link)`
    font-family: sans-serif;
    color: black;
    text-decoration: none;
    border-radius: 4px;
    border: 1px solid ${lightModeColors.lightgray};
    padding: 15px;
    box-shadow: 0 17.125px 70px -12.125px rgba(0, 0, 0, 0.1);
    transition: transform 250ms;
    background-color: ${lightModeColors.white};
    &:hover {
        transform: scale(1.03);
    }
    h3 {
        color: ${lightModeColors.lightblack};
        margin: 0px;
    }
    h4 {
        color: ${lightModeColors.black};
        font-size: 12px;
        font-style: italic;
    }
    display: grid;
`;
