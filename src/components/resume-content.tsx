import React from "react";

type Props = {
    html: string;
};

export const ResumeContent: React.FC<Props> = ({ html }) => (
    <>
        {
            html
                ? <div dangerouslySetInnerHTML={{
                    __html: html
                    }}
                />
                : null
        }
    </>
);
