import styled from "@emotion/styled";
import { Link } from "gatsby";
import { colors } from "../constants";

export const Card = styled(Link)`
    font-family: sans-serif;
    color: black;
    text-decoration: none;
    border-radius: 4px;
    padding: 15px;
    box-shadow: 0 17.125px 70px -12.125px rgba(0,0,0,0.5);
    transition: transform .2s;
    background-color: ${colors.snow};
    &:hover {
        transform: scale(1.03);
    }
    h4 {
        color: gray;
        font-size: 12px;
        font-style: italic;
    }
`;

