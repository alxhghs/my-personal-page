---
date: "2019-10-30"
title: "Hosting multiple NextJS apps on one domain with TypeScript and Express"
keywords: [ "typescript", "express", "nextjs", "ts-node" ]
---

# Hosting multiple NextJS apps on one domain with TypeScript and Express

This guide assumes basic familiarity with TypeScript, Node and Express. 

If you’re here, you may be running into the same issue that I had when trying to run more than one Next app on the same domain. In my case, I had one app that ran the main site and another app that was used to build PDFs by sending HTML to Prince XML. The problem is that Next hosts static files in a `_next` folder and if you have more than one Next app these folders conflict. 

The solution is actually very simple. 

Here’s an overview before diving in to the details.  In the app that will be your “secondary” Next app, do the following:

1. Create a custom Next server
2. Use the setAssetPrefix API to set a prefix to the static files in your next app
3. Strip this asset prefix away in your app’s `GET` request. 

## Creating a custom Next server

We will use Express to create a custom server for NextJS. This will allow us to set an asset prefix and fix the `_next` folder collision. 

```typescript
import nextjs from "next";
import express, { Request, Response, NextFunction } from "express";

const dev = process.env.NODE_CONFIG !== "production";

const app = nextjs({ dev });
const port = dev ? 3000 : 80;
const server = express();
const handle = app.getRequestHandler();

app.prepare().then(() => {
    server.get("*", (req, res) => {
        handle(req, res);
    });
    server
        .use((err: Error, _: Request, res: Response, __: NextFunction) => {
            res.sendStatus(500);
        })
        .listen(port);
});

```

In order to run this server, add the following script to `package.json`.

```json
"start": "NODE_ENV=production ts-node --project tsconfig.server.json ./index.ts",
```

This will allow you to run the server using ts-node and a custom `tsconfig` file for your server. Here is the `tsconfig` file that I used. 

```json
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
        "module": "commonjs",
        "outDir": "dist",
        "target": "es2017",
        "lib": [
            "es2017"
        ]
    }
}
```

Now that we have a basic custom server, let’s add an asset prefix. Add the following at the start of the call to `app.prepare`.

```typescript
app.prepare().then(() => {
    const subRoute = "/whatever";
    app.setAssetPrefix(subRoute);
    server.use((req, _, next) => {
        req.url = req.url.replace(subRoute, "");
        next();
    });
```

First, we add an asset prefix in order to distinguish the static files between apps. Then, in order to host the files from the root directory of our secondary Next app, we strip away the asset prefix on every request. 

## Conclusion

Hopefully this technique makes it easy to host multiple Next apps on one domain!

