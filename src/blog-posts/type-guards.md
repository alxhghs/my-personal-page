---
date: "2019-09-07"
title: "Type Guards in TypeScript with React"
subtitle: "Using types for dynamic code"
keywords: [ "typescript", "react", "type guards" ]
---

TypeScript is a powerful language for insuring type safety in React applications. There are often cases where it is useful to check the type of a `prop`. You can check to confirm that a `prop` is the primitive type that you expect (e.g. `string`, `number`) using the `typeof` operator. If you are unfamiliar with `typeof`, check out this [Mozilla article before continuing on](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).

In this article, we will look at how to check for more complex types that you can create in TypeScript. For our example, we will reference a `MediaSlider` React component that can render either an array of photo slides or video slides. Because the photos and videos will be rendered differently, in this example it will be useful to use a type-guard to determine whether the slides are photos or videos.

This will be the shape of our `Photo` and `Video` objects:

```typescript
type Photo = {
    caption: string;
    url: string;
    altText: string;
};

type Video = {
    url: string;
};
```

Our `MediaSlider` component will take an array of `slides` as a prop. Here is how it would look as a component being used in a React application.

```typescript
const PhotoSlides: Array<Photo> = [
    {
        caption: "Luke Skywalker",
        url: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwii-rq-rsHkAhUhc98KHd7RBgMQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.starwars.com%2Fdatabank%2Fluke-skywalker&psig=AOvVaw0P_5XRq_zyK0uxkEz6wE9k&ust=1568036817844184",
        altText: "Luke Skywalker looking forward"
    },
    {
        caption: "Princess Leia",
        url: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwinx6nXrsHkAhVjk-AKHVYtDn8QjRx6BAgBEAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPrincess_Leia&psig=AOvVaw2MeNl16x5ejFd4YfpjM1Lc&ust=1568036871194707",
        altText: "Princess Leia with a blaster"
    },
];

const VideoSlides: Array<Video> = [
    {
        url: "https://www.youtube.com/watch?v=g6PDcBhODqo&t=204s",
    },
    {
        url: "https://www.youtube.com/watch?v=hh-zGP-LcQQ",
    },
];

export const App: React.FC = () => (
    <>
        <MediaSlider slides={PhotoSlides} />
        <MediaSlider slides={VideoSlides} />
    </>
);
```

We want the MediaSlider to handle `Photo` slides differently from `Video` slides. Type guards are exactly what we need. Let's create a function using the TypeScript `is` keyword to check the `slide` type.

```typescript
const isPhotoArray = (slides: any): slides is Photo[] => {
    return slides && slides[0] && typeof slides[0].caption === "string";
};
```
How is this function working? `isPhotoArray` takes in either an array of `Photo` or an array of `Video`. Our return type of `slides is Photo[]` tells TypeScript that the boolean value that we return from this function will determine whether the argument provided is an array of `Photo`. 

So in our return, we use the `&&` operator to do 3 boolean checks. First we check that `slides` is not `null` or `undefined`. Then we check that there is an index 0 of `slides`. Lastly, we check that `slides[0].caption` is a `string`. We know that the `Photo` type has a `caption` while `Video` does not, so we can use this function to determine whether the type of array passed to `MediaSlider` is a `Photo` array or a `Video` array. This is a pretty cool trick! 

What would this look like within the `MediaSlider` component?

```typescript
type Props = {
    slides: Photo[] | Video[];
};
export const MediaSlider: React.FC = ({ slides }) => {
    if (!slides) {
        return null;
    }
    if (isPhotoArray(slides)) {
        return (
            /* photo array stuff here */
        )
    }
    return /* video array stuff here */
}
```

Hope this is helpful to anyone who gets this far!
