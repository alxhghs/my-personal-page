import React from "react"
import Img from "gatsby-image"
import { FluidObject } from "gatsby-image"

type Props = {
    fluid: FluidObject
}

export const BlogImage: React.FC<Props> = ({ fluid }) => (
    <Img
        fluid={fluid}
        css={{
            width: "100%",
            height: "100px",
            objectFit: "cover",
        }}
    />
)
