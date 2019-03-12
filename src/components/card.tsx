import styled from "@emotion/styled";
import { Link } from "gatsby";

export const Card = styled(Link)`
    font-family: sans-serif;
    color: black;
    text-decoration: none;
    border-radius: 4px;
    padding: 15px;
    margin: 5px;
    box-shadow: 0 17.125px 70px -12.125px rgba(0,0,0,0.3);
    transition: transform .2s;
    &:hover {
        transform: scale(1.03);
    }
    h3 {
        color: gray;
        font-size: 12px;
        font-style: italic;
    }
`;

