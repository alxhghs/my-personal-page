import React from "react";
import { Link } from "gatsby";

type Props = {
    previous?: string;
    next?: string;
};
export const NextPreviousLinks: React.FC<Props> = ({
    previous,
    next,
    children,
}) => (
    <>
        <NextPreviousLink previous={previous} next={next} />
        {children}
    </>
);

const NextPreviousLink: React.FC<Props> = ({ previous, next }) => (
    <div
        css={{
            display: "flex",
            justifyContent: previous && next ? "space-between" : "center",
            textAlign: "center",
            width: 150,
            lineHeight: "50px",
            margin: "0 auto",
        }}
    >
        {previous && <Link to={previous}>Previous</Link>}
        {next && <Link to={next}>Next</Link>}
    </div>
);
