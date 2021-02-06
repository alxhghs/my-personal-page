import React from "react"
import styled from "@emotion/styled"

import { SEO } from "../components/seo"

const Wrapper = styled("div")`
    display: grid;
    justify-content: center;
    align-content: center;
    text-align: center;
    height: 100%;
`

const NotFoundPage = () => (
    <Wrapper>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Wrapper>
)

export default NotFoundPage
