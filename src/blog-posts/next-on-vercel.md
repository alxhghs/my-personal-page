---
date: "2020-07-28"
title: "Getting Online with ReactJS and TypeScript"
subtitle: "using NextJS and Vercel"
keywords: [ "typescript", "react", "nextjs", "javascript", "nextjs", "vercel" ]
---

The Vercel hosting platform provides one of the easiest and most functional ways to host a web application. Vercel provides:
* simple deployment and hosting for over a dozen JamStack frameworks
* a generous free-tier for hobbyists
* automated deployments of a production branch as well as any other branches which can be used for development
* previews of deployments
* detailed logs
* environment variables
* domain management
* integrations, like Slack

Recently I started using Vercel to host a NextJS application with TypeScript. In this post I'll walk through how to set up a NextJS application with TypeScript and how to deploy it with Vercel.

## How to create a NextJS app with TypeScript
* Create your project folder

```
mkdir [some-project-name]
```

* Change directories into your project folder

```
cd [some-project-name]
```
* Initialize git

```
git init
```
* Create a `.gitignore` file and add the following:

```
node_modules
.next
```
* Create an npm project - you can use the default values or respond in greater detail

```
npm init
```
* Install your dependencies

```
npm install next react react-dom
npm install --save-dev typescript @types/react @types/node
```
* Add these scripts to your `package.json`

```
"scripts": {
    "dev": "next",
    "build: "next build",
    "start": "next start"
}
```
Create a `tsconfig.json` file, useful for configuring TypeScript. NextJS will provide default values if you leave this file empty.

```
touch tsconfig.json
```
* Create a pages directory
    * Open an IDE, I recommend VSCode
    * Create a folder in the root called `pages`
    * Create a file for the root URL called `index.tsx`
    * You can add something like the following for a basic page

```typescript
import { NextPage } from "next";
import { useState } from "react";

const Page: NextPage = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount((c) => c + 1)}>increase</button>
            <button onClick={() => setCount((c) => c - 1)}>decrease</button>
        </>
    );
};

export default Page;
```
Start the NextJS app - this will populate the `tsconfig.json` file
```
npm run dev
```
* Go to http://localhost:3000 to view your site
* Save your work to Git

```
git add .
git commit -m "initial commit"
```
Let's save to the main branch

```
git checkout -b main
```

## Add your project to GitHub
* Create a new project
* Copy the commands for pushing an existing repo, something like this

```
git remote add origin https://github.com/my-username/test.git
git push -u origin main
```
* Refresh to confirm your code is on GitHub

## Getting your code online with Vercel
* Go to https://www.vercel.com
* Login using GitHub or create an account
* Click to Import Project
* Import Git Repository
* Add the URL to your repo, something like `https://github.com/my-username/test`

And that's it! Pretty simple to get a NextJS app with TypeScript up and running. You can also check out the [Vercel command line tool](https://github.com/vercel/vercel/tree/master/packages/now-cli) if you're interested in other JamStack frameworks and would like a simple way to get started.
