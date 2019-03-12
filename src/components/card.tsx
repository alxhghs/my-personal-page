import styled from "@emotion/styled";
import { Link } from "gatsby";

export const Card = styled(Link)`
    font-family: sans-serif;
    color: black;
    text-decoration: none;
    border-radius: 4px;
    padding: 15px;
    h3 {
        color: gray;
        font-size: 12px;
        font-style: italic;
    }
    box-shadow: 0 17.125px 70px -12.125px rgba(0,0,0,0.3);
`;

