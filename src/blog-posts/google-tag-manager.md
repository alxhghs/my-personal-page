---
date: "2019-03-19" 
title: "Google Tag Manager and Gatsby"
subtitle: "Part 1"
description: "Part 1 in a series of blog posts on how to integrate Google Tag Manager with GatsbyJS"
keywords: ["Google Tag Manager", "Gatsby", "GatsbyJS", "React", "GTM", "Google Analytics", "GA"]
---

Google Tag Manager (GTM) is a tool for managing 3rd party scripts and (when paired with Google Analytics) for making data-informed decisions about your website. 

If you want to dive into a great course for getting started with GTM, Google's own [Google Tag Manager Fundamentals](https://analytics.google.com/analytics/academy/course/5) course is excellent. If you want a general overview, read on!

I've simplified GTM into core concepts to make it easy to get started. I will walk through important terms and show how to add GTM to your website.

## Important terms to get started

[Source: Google Tag Manager Help](https://support.google.com/tagmanager#topic=3441530)

### Google Tag Manager (GTM)

> Google Tag Manager is a tag management system (TMS) that allows you to quickly and easily update tracking codes and related code fragments collectively known as tags on your website or mobile app. Once the small segment of Tag Manager code has been added to your project, you can safely and easily deploy analytics and measurement tag configurations from a web-based user interface.

### Google Analytics (GA)

> Google Analytics is a web analytics service offered by Google that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand.

### Data layer

> A data layer is a JavaScript object that is used to pass information from your website to your Tag Manager container. For example:  
>```javascript
{ category: "myCategory" }

### Tags

> Tags are segments of code provided by analytics, marketing, and support vendors to help you integrate their products into your websites or mobile apps. With Google Tag Manager, you no longer need to add these tags directly to your projects. Instead, you configure and publish tags and how they fire from within the Tag Manager user interface.

### Triggers

> Tags fire in response to events. In Google Tag Manager, a trigger listens to your web page or mobile app for certain types of events like form submissions, button clicks, or page views. The trigger tells the tag to fire when the specified event is detected. Every tag must have at least one trigger in order to fire.

### Variables 

> Variables in Google Tag Manager are named placeholders for values that are populated when code is run on your website or mobile app. For example, the Tag Manager variable named "Page URL" returns the current web page URL.

## Setting up GTM with Gatsby

This is a general overview of the process with Gatsby. Check [Google's documentation](https://developers.google.com/tag-manager/quickstart) for more information as it will be the most current.

### Create GTM account

First, you need to create a GTM account using a Google account. Go to [tagmanager.google.com](https://tagmanager.google.com) and complete registration.

>NOTE: A GTM "Container" manages workspaces and retains container versions. I recommend naming this after your website (e.g. www.alexhughes.dev).

### Add GTM to Gatsby 

To add GTM to any site, you must add GTM scripts to your HTML. In Gatsby, you can do this by copying Gatby's default `html.js` file to your `src` directory and making changes.

[Gatsby's documentation on editing `html.js`](https://www.gatsbyjs.org/docs/custom-html/)

Run this command in your terminal from the root directory of your Gatsby project in order to copy `html.js`:
```bash
cp .cache/default-html.js src/html.js
```

Add the GTM script to the top of `html±<head>` in `src/html.js`. See [Google's Quick Start Guide](https://developers.google.com/tag-manager/quickstart) for where to find the GTM script. Since we are using React, you will need to add the script using `dangerouslySetHTML` as shown below. Don't worry about it being dangerous, [we know what we are doing, right?](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)

```javascript
{/* Google Tag Manager */}
<script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var
        f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-<GTM ID HERE>');</script>`,
    }}
/>
{/* End Google Tag Manager */}
```
Also, add the `html±<noscript>` tag to the top of `html±<body>` in `src/html.js`.
```javascript
{/* <!-- Google Tag Manager (noscript) --> */}
<noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-<GTM ID HERE>" height="0" width="0"
        style="display:none;visibility:hidden"></iframe>
        `,
    }}
/>
{/* <!-- End Google Tag Manager (noscript) --> */}
```

Congrats! You've successfully connected GTM to your Gatsby site. Go ahead and reload your site and check the `html±<head>` and `html±<body>` to confirm that the scripts were successfully loaded.

Continue to [Google Tag Manager and Gatsby (Part 2)](/blog/google-tag-manager-2) to see examples of how to use GTM with your site.

## Resources
[Google Tag Manager Fundamentals Course](https://analytics.google.com/analytics/academy/course/5)

[Google Tag Manager Help](https://support.google.com/tagmanager#topic=3441530)

[Setup and install Tag Manager](https://support.google.com/tagmanager/answer/6103696?hl=en)

[The Ultimate Google Tag Manager Glossary (160+ terms)](https://www.analyticsmania.com/post/google-tag-manager-glossary/)
