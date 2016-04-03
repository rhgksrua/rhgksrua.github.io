---
layout: post
title: Using Jekyll Front Matter for CSS
css:
- post.css
---

# {{page.title}}

One problem I ran into while creating a layout for this personal github page was using a specific `css` file for different pages.  I wanted to use `blog.css` for list of posts and `post.css` for individual posts.

{% raw %}
Each layout only allowed one `{{ content }}`.  So layout could not contain more than a single content. There are work arounds like creating a template for each page and using `{% include index.html %}` or putting all the `css` files in a single file.
{% endraw %}

However, I have decided to use Jekyll front matter to specify which `css` file to use in different pages.

### Using Front Matter to passdown variables

```html
// _layouts/parent.html

// front matter
---
---

<!-- parent layout -->
<html>
    <head>
    </head>
    <body>
    {% raw %}   {{ content }} {% endraw %}
    {% raw %}{{ page.somevariable }}{% endraw %}
    </body>
</html>

```

```html
// child.html
// front matter
---
layout: parent
somevariable: hello
---

<!-- child layout -->

<div>
   Child
</div>
```

`somevariable` in child layout will print out in the parent layout by using `page.somevariable`

Using this property, `child.html` can add a `css` variable in the front matter to specify which `css` file it wants to use.

```html
// _layouts/parent.html

// front matter
---
---

<!-- parent layout -->
<html>
    <head>
        <link rel='stylesheet' href='{% raw %}{{ page.css }}{% endraw %}'>
    </head>
    <body>
    {% raw %}    {{ content }} {% endraw %}
        <div>
    {% raw %}    {{ page.somevariable }}{% endraw %}
        </div>
    </body>
</html>

```

```html
// child.html
// front matter
---
layout: parent
somevariable: hello
css: child.css
---

<!-- child layout -->

<div>
   Child
</div>
```

The above code will add `child.css` into the parent layout.

For more than one `css` files, you can use the code below.

```
css:
- childone.css
- childtwo.css
- childthree.css
```

In the parent layout, use a for loop to add all the css in the front matter.

### Using child of a child

Sometime you might have a chain of layouts such as below.

```html
// _layouts/parent.html
// front matter
---
---

<!-- parent layout -->
<html>
    <head>
        <link rel='stylesheet' href='{% raw %}{{ page.css }}{% endraw %}'>
    </head>
    <body>
    {% raw %}    {{ content }} {% endraw %}
        <div>
        </div>
    </body>
</html>


// _layouts/childone.html
// front matter
---
layout: parent
somevariable: hello
css: childone.css // Does not work
---

<!-- childone layout -->

<div>
   Child
    {% raw %}{{ content }} {% endraw %}
</div>


// childtwo.html
// front matter
---
layout: childone
somevariable: hello
css: childtwo.css // Works
---

<!-- childtwo layout -->

<div>
   Child of child
</div>
```

The `css` in `childone.html` front matter will not be available.  Any variable in `childone.html` will not be available in the parent layout. Therefore, `css` file should only be included in the last child.
