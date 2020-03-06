---
date: "2020-03-05"
title: "setTimeout and clearTimeout in React with hooks"
subtitle: "Avoiding memory leaks when components unmount"
keywords: [ "typescript", "react", "setTimeout", "clearTimeout", "hooks", "useEffect", "JavaScript" ]
---

Do a quick search and you’ll find many people saying that with `setTimeout` there is no need to call `clearTimeout` unless we want to end the `setTimeout` early. 

https://stackoverflow.com/questions/7391567/when-using-settimeout-do-you-have-to-cleartimeout

And from the HTML5 documentation:

https://www.w3.org/TR/html5/webappapis.html#timers

> The clearTimeout() and clearInterval() methods must clear the entry identified as handle from the list of active timers of the WindowOrWorkerGlobalScope object on which the method was invoked, if any, where handle is the argument passed to the method. (If handle does not identify an entry in the list of active timers of the WindowOrWorkerGlobalScope object on which the method was invoked, the method does nothing.)

While this may be true generally, when using `setTimeout` in React we must account for what happens if a component unmounts before the timer is completed. Imagine we wanted to create a hook that copied text to a user’s clipboard and also provided functionality for changing a button’s text from “Copy to clipboard” to “Copied” and back. We might first take an approach like this:

```typescript
import { useState } from "react";
import copy from "copy-to-clipboard";

export const useClipboard = () => {
    const innerText = “Copy to clipboard”;

    const [labelText, setLabelText] = useState(innerText);

    const handleCopy = (text: string) => {
        copy(text);
        setLabelText("Copied!");
        setTimeout(() => setLabelText(innerText), 2000);
    };

    return { labelText, handleCopy };
};
```
Someone using this hook can use the `handleCopy` function to copy text to a clipboard and can use the `labelText` to swap the text of a button from ”Copy to clipboard” to “Copied” and back. But what happens if the component that calls the `handleCopy` function unmounts before 2000ms? There would be a memory leak. 

We can fix this by running `clearTimeout` inside the return of a `useEffect` which will run when the component unmounts. 

```typescript
import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";

export const useClipboard = () => {
const innerText = “Copy to clipboard”;

    const [labelText, setLabelText] = useState(innerText);

    useEffect(() => {
        const timer = setTimeout(() => setLabelText(initialInnerText), 2000);
        return () => clearTimeout(timer);
    }, [labelText]);

    const handleCopy = (text: string) => {
        copy(text);
        setLabelText("Copied!");
    };

    return {labelText, handleCopy};
};
```

While `clearTimeout` won’t have any effect if the timer is complete, if the component that uses `handleCopy` unmounts before `setTimeout` finishes, the return of the `useEffect` will ensure there is no memory leak. 

There’s at least one last optimization we can make to our code. Right now the `useEffect` runs every time the `labelText` changes which means we are using `setTimeout` to swap the `labelText` even if the text isn’t changing. We can remedy this with a quick return if `labelText === innerText`.

```typescript
useEffect(() => {
        if (labelText === innerText) return;

        const timer = setTimeout(() => setLabelText(initialInnerText), 2000);
        return () => clearTimeout(timer);
    }, [labelText]);
```

And that’s a quick example of using `setTimeout` with `clearTimeout` in React with hooks!
