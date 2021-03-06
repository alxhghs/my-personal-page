import React from "react";
import styled from "@emotion/styled";

import { SEO } from "../components/Seo";

const Wrapper = styled.div({
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    height: "100%",
});

const NotFoundPage = () => (
    <Wrapper>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Wrapper>
);

export default NotFoundPage;
