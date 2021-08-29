---
date: "2021-08-28"
title: "Multi line ellipsis with pure CSS"
subtitle: "A hacky workaround"
keywords: [ "css"]
---

Recently I wanted to create a text box that cut off content after a set number of lines with an ellipsis. Surprisingly this isn’t something that is easily supported with a basic CSS property like `text-overflow: ellipsis` which only works for one line of text. After doing some digging around in stackoverflow I learned about the line-clamp CSS property which today has overall [decent support](https://caniuse.com/?search=line-clamp).

In order to get this to work, `-webkit-line-clamp` must include the following CSS:

```css
.ellipsis {
    display: -webkit-box;
    height: calc(16px * 4 * 1.6);  // font-size * lines to show * line-height
    font-size: 16px;
    line-height: 1.6;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis
}
```

Let’s break down these CSS properties. 

`-webkit-box` was the precursor to `flex` and should generally not be used anymore. However, it’s the only way I’ve found to achieve a multi line ellipsis. 

The height of the container should be the `font-size` times the number of lines times the `line-height`. If you take a moment to visualize why this is it should make sense intuitively. 

The `-webkit-line-clamp` property is how we can specify the number of visible lines. It’s important to pair this with `webkit-box-orient: vertical` otherwise the content will be laid out horizontally. 

Lastly, `overflow: hidden` keeps and text beyond the `line-clamp` value from being visible, and `text-overflow: ellipsis` gives us our nice ellipsis effect. 

Overall, it feels a little hacky. Hopefully someday there will be a cleaner solution. 

Thanks to Martin Wolf for this helpful Codepen: [link](https://codepen.io/martinwolf/pen/qlFdp)
