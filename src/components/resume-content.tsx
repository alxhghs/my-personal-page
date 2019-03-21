import React from "react";

type Props = {
    html: string;
    css?: any 
};

export const ResumeContent: React.FC<Props> = ({ html, css }) => (
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
