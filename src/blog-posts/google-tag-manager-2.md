---
date: "2019-03-20" 
title: "Google Tag Manager, Google Analytics and Gatsby"
subtitle: "Part 2"
description: "Part 2 in a series of blog posts on how to integrate Google Tag Manager and Google Analytics with GatsbyJS"
keywords: ["Google Tag Manager", "Gatsby", "GatsbyJS", "React", "GTM", "Google Analytics", "GA"]
---

In this guide, we will start tracking page views for our website using <b>Google Tag Manager</b> (GTM), <b>Google Analytics</b> (GA) and <b>GatsbyJS</b>.

This is part 2 in a series on GTM, GA and Gatsby. If you need a general overview of GTM and instructions on how to get started, see <b>[Google Tag Manager and Gatsby (Part 1)](/blog/google-tag-manager)</b>.

## Sign up for GA 

If you haven't signed up for GA yet, go to [analytics.google.com](https://analytics.google.com/analytics/web/) to get started.

## Connect GTM to GA 

### Get GA Tracking ID

Next, to connect GTM to GA, we will need your GA tracking ID. 

From the GA dashboard, click <i>Admin</i>, and then click <i>Properties</i>. Copy the <i>Tracking Id</i> for the next step.

<img alt="GIF showing how to get Google Analytics Tracking ID" style="-webkit-user-select: none;" src="https://media.giphy.com/media/452X5Ai7pnqtdlcxQT/giphy.gif" class="gif">

### Create GA Variable in GTM

We are going to connect GA to your site in order to keep track of page views. Let's add a GA variable so that we can reference the GA tracking ID without having to look it up every time we want to use it. 

* From the GTM <i>Workspaces</i>, page, click <i>Variables</i> on the left 
* Under <i>User defined variables</i>, click <i>New</i>.
* Click in the box to configure the variable
* Select <i>Google Analytics Settings</i>
* Paste your <i>Tracking ID</i>
* Name your variable (e.g. <i>Google Analytics Settings</i>)
* Save

<img alt="GIF showing how to create a Google Analytics variable in Google Tag Manager" style="-webkit-user-select: none;" src="https://media.giphy.com/media/nxOlfLBfK4oHPbjRJr/giphy.gif" class="gif">

Now we can reference <i>Google Analytics Settings</i> whenever we need to get the <i>GA Tracking ID</i>. Variables are super handy!

### Create a Page View Trigger in GTM 

Let's create a <i>Page View</i> trigger so that we can track page views for our site. 

> NOTE: Triggers are conditions that fire triggers when the conditions are met.

* From the GTM <i>Workspaces</i> page, click <i>Triggers</i> on the left
* Click <i>New</i>
* Click on then pencil icon to edit the trigger
* Select the default <i>Page View</i>
* Click <i>Save</i>
* Name your trigger (e.g. <i>Page View</i>)
* Click <i>Save</i>

<img alt="GIF showing how to create a Page View trigger in Google Tag Manager" style="-webkit-user-select: none;" src="https://media.giphy.com/media/7zYBpySbTzB61PygW7/giphy.gif" class="gif">

### Create a Page View Tag in GTM

Let's create a <i>Page View</i> tag so that we can track page views for our site. 

> NOTE: Tags are scripts that we can fire based on certain conditions (triggers)

* In GTM, click on <i>Tags</i>
* Click <i>New</i>
* Click on the pencil icon to edit the tag
* Click <i>Google Analytics - Universal Analytics</i>
* Select the <i>{{ Google Analytics Settings}}</i> variable (or whatever you named it)
* Make sure the <i>Track Type</i> is <i>Page View</i>
* Click on <i>Triggering</i>
* Select <i>Page View</i>
* Click <i>Save</i> 
* Name your tag (e.g. <i>Google Analytics - Page View</i>) and save

<img alt="GIF showing how to create a tag with a trigger in Google Tag Manager" style="-webkit-user-select: none;" src="https://media.giphy.com/media/n41BBb7UvPSDCyXjQg/giphy.gif" class="gif">

## Publish your changes

Google Tag Manager has a versioning system, so in order for your changes to go live you must publish them. 

* From the GTM <i>Workspaces</i> page, click <i>Submit</i>
* Give your version a descriptive name, and save

<img alt="GIF showing how to publish Google Tag Manager changes" style="-webkit-user-select: none;" src="https://media.giphy.com/media/ewrKe2ui0fuBkp9rFj/giphy.gif" class="gif">

## Summary 

You've successfully connected GTM and GA to your site, and now you're tracking page views with GA. Head over to GA to see the data coming in!

## Resources
[Google Tag Manager Fundamentals Course](https://analytics.google.com/analytics/academy/course/5)

[Google Tag Manager Help](https://support.google.com/tagmanager#topic=3441530)

[Setup and install Tag Manager](https://support.google.com/tagmanager/answer/6103696?hl=en)

[The Ultimate Google Tag Manager Glossary (160+ terms)](https://www.analyticsmania.com/post/google-tag-manager-glossary/)
