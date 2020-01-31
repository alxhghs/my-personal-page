---
date: "2020-01-31"
title: "TypeScript inline function return types"
subtitle: "Mapping and filtering an array in React"
keywords: [ "typescript", "react", "type guards" ]
---

Have you ever tried filtering before mapping in TypeScript only to find that TypeScript still marks items as potentially undefined? I learned recently how to tell the Typescript compiler what `Array.filter` returns in order to address this problem. 

Here is a React example of a filter that TypeScript doesn’t understand, using a `Book` type and an array that you might get as an API response. 

```typescript
type Book = {
    title: string;
} | undefined;

const books: Book[] = [
    {
        title: “Moby Dick”,
    },
    {
        title: “1984”,
    },
    undefined,
];

const Books: React.FC = () => (
    <>
        {
            books?.filter((b) => !!b).map((book) => <div>{book.title}</div>
        }
    </>
);
```

TypeScript will mark the book as potentially undefined, even though we as developers know better because of our `filter`.

What if we could let the TypeScript compiler know that filter is returning only defined `Book`s?  We can accomplish this by using a typeguard and the `is` keyword by filtering like this:

```typescript
books?.filter((b): b is Book => !!b)
```

The `b is Book` lets the compiler know that the return value of the filter function is a Boolean value that determines if `b` is of type `Book`.  How would this look in the example from before?

```typescript
const Books: React.FC = () => (
    <>
        {
            books?.filter((b): b is Book => !!b).map((book) => <div>{book.title}</div>
        }
    </>
);
```

Now the Typescript compiler correctly understands that `book` in our `map` function is defined. A simple but neat trick!
