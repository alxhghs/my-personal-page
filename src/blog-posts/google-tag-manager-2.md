---
date: "2019-03-20" 
title: "Google Tag Manager and Gatsby"
subtitle: "Part 2"
description: "Part 2 in a series of blog posts on how to integrate Google Tag Manager with GatsbyJS"
keywords: ["Google Tag Manager", "Gatsby", "GatsbyJS", "React", "GTM", "Google Analytics", "GA"]
---

This is part 2 in a series on using Google Tag Manager (GTM) with Gatsby.

If you want to see a general overview of GTM and instructions on how to get started, see [Google Tag Manager and Gatsby (Part 1)](/blog/google-tag-manager).

Now that we've added GTM to your site, let's unleash the power of GTM and Google Analytics (GA).

### Sign up for Google Analytics

If you haven't signed up for GA yet, go to [https://analytics.google.com/analytics/web/](https://analytics.google.com/analytics/web/) and sign up to get started.

### Connect to Google analytics

Next, to connect GTM to GA, we will need your GA tracking ID. 

From the GA dashboard, click <i>Admin</i>, and then click <i>Properties</i>. Copy the <i>Tracking Id</i> for the next step.

<img style="-webkit-user-select: none;" src="https://media.giphy.com/media/452X5Ai7pnqtdlcxQT/giphy.gif" class="gif">

We are going to connect GA to your site in order to keep track of page views. Let's add a GA variable so that we can reference the GA tracking ID. 

* From the workspaces page, click <i>Variables</i> on the left. 
* Under <i>User defined variables</i>, click <i>New</i>.
* Click in the box to configure the variable
* Select <i>Google Analytics Settings</i>
* Paste your <i>Tracking ID</i>
* Save

<img alt="GIF showing how to create a Google Analytics variable in Google Tag Manager" style="-webkit-user-select: none;" src="https://media.giphy.com/media/nxOlfLBfK4oHPbjRJr/giphy.gif" class="gif">

### Add tags, triggers and variables to GTM 


Let's start collecting data.

## Resources
[Google Tag Manager Fundamentals Course](https://analytics.google.com/analytics/academy/course/5)

[Google Tag Manager Help](https://support.google.com/tagmanager#topic=3441530)

[Setup and install Tag Manager](https://support.google.com/tagmanager/answer/6103696?hl=en)

[The Ultimate Google Tag Manager Glossary (160+ terms)](https://www.analyticsmania.com/post/google-tag-manager-glossary/)
