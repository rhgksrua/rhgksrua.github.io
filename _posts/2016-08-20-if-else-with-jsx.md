---
layout: post
title: If else with JSX elements
css:
- post.css
---

# {{ page.title }}

ReactJS with JSX

## ReactJS recommended method of showing conditional elements

### Using CSS
```
<div id={thisElementExists ? 'show' : 'hide'}>Hide this if thisElementExists is true</div>
```

Uses CSS such as `display: none;` to hide element.

### Using if else statement before JSX.

```

let thisElementExists;
if (thisElementExists) {
    thisElement = <div>Hello World</div>;
} else {
    thisElement = null; // or another element
}

return (
    <div>
        {% raw %}{{ thisElement }}{% endraw %}
    </div>
);

```

### Using if else statement in JSX

```
return (
    {thisElement &&
    <div>Hello World</div>
    }
);
```

## Using custom components

### List of npm packages for conditional JSX

* `react-if` [github](https://www.npmjs.com/package/react-if)

