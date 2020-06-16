import styled from "@emotion/styled";
import { Link } from "gatsby";
import { colors } from "../constants";

export const Card = styled(Link)`
    font-family: sans-serif;
    color: black;
    text-decoration: none;
    border-radius: 4px;
    border: 1px solid ${colors.lightgray};
    padding: 15px;
    box-shadow: 0 17.125px 70px -12.125px rgba(0,0,0,0.1);
    transition: transform 250ms;
    background-color: ${colors.white};
    &:hover {
        transform: scale(1.03);
    }
    h3 {
        color: ${colors.lightblack};
    }
    h4 {
        color: ${colors.black};
        font-size: 12px;
        font-style: italic;
    }
    display: grid;
`;

