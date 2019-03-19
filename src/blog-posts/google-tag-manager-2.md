---
date: "2019-03-19" 
title: "Google Tag Manager and Gatsby (Part 2)"
---

Google Tag Manager (GTM) is a powerful tool for managing 3rd party scripts as well as generating data for making data-informed decisions. It can be confusing getting started with GTM. In this post, I will walk through some important terms and show you how to add GTM to your website.

Once you get the hang of it, it's actually not that complicated.

##Important terms to get started

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

Run this command in your terminal:
```bash
cp .cache/default-html.js src/html.js
```

add GTM script to `<head>` tag of website.
```javascript
{/* Google Tag Manager */}
<script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var
        f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-<GTM ID HERE>');</script> <!-- End Google Tag Manager -->`,
    }}
/>
{/* End Google Tag Manager */}
```
add `<noscript>` tag
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


### Add tags, triggers and variables to GTM 

### Connect to Google analytics

## Resources
[Google Tag Manager Help](https://support.google.com/tagmanager#topic=3441530)

[Setup and install Tag Manager](https://support.google.com/tagmanager/answer/6103696?hl=en)

[The Ultimate Google Tag Manager Glossary (160+ terms)](https://www.analyticsmania.com/post/google-tag-manager-glossary/)
