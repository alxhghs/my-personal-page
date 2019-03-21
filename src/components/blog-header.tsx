import React from "react";
import styled from "@emotion/styled";
import { ProfileImage } from "../components";

const StyledBlogHeader = styled("div")`
    text-align: center;
`;

type Props = {
    title: string;
    subtitle?: string;
    author: string;
    date: string;
};

export const BlogHeader: React.FC<Props> = ({ title, subtitle, author, date }) => (
    <StyledBlogHeader>
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
        <ProfileImage height="100px" width="100px" />
        <h3>by { author }</h3>
        <h4>{ date }</h4>
    </StyledBlogHeader>
);
