---
date: "2020-06-21"
title: "Using the current path in Gatsby"
subtitle: "Dynamic CSS using Styled Components and Typescript"
keywords: [ "typescript", "react", "gatsby", "javascript" ]
---

As someone who mostly uses NextJS these days, it was a little tricky to get the current URL path of a Gatsby page, but once you know how to do it's pretty straight forward.

Gatsby pages expose a `path` prop which will always be the current URL path. It wasn't immediately obvious how to get this to work with TypeScript, but I found that Gatsby exports a `Page` type which can be passed to `React.FC` in order to get the correct types. Here is an example Gatsby page component that uses the current path.

```typescript
import { Page } from "gatsby";

export const Page: React.FC<Page> = ({ path }) => {
    ...
}
```

With the path, you can do things dynamically like style content based on the route. On this site, I underline `Home` or `Blog` based on the `path`. Here is an example using styled components.

```typescript
const H2 = styled.h2<{ underline: boolean }>(({ underline }) => ({
    textDecoration: underline ? "underline" : undefined,
}));

export const Page: React.FC<Page> = ({ path }) => {
    return (
        <>
            <H2 underline={path === "/" || path === ""}>
                Home
            </H2>
            <H2 underline={path.includes("blog)}>
                Blog
            </H2>
        </>
    )
}
```

From a Gatsby Page you can pass the `path` prop to child components or you could create a context which would make `path` available anywhere. I think I prefer NextJS which exposes a `useRouter` hook that I think makes this process a little easier, but the Gatsby approach works!
