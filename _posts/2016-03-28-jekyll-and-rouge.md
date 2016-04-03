---
layout: post 
title: Jekyll and Rouge
something: hello world
css:
- post.css
---

# {{page.title}}

Rouge is a syntax highlighter. It is also the default highlighter for [github pages](https://github.com/blog/2100-github-pages-now-faster-and-simpler-with-jekyll-3-0). Inspecting elements shows what syntax highlighting does to the markdown. The code is broken down and wrapped in `span` tags with appropriate class names.

However, to actually see some highlights on the code snippet, you need a theme `css`.
Here are some ways to acquire it.

### Create your own.

You can look at all the different classes generated and give each class a color.

### Use rouge `rougify`.

According to [Rouge](https://github.com/jneen/rouge), you can output a `css` file by code below.

```sh
rougify style monokai.sublime > syntax.css
```

Just add above `css` file to you page.

### Or just look for themes on Google.

Googling should provide plenty of themes you can us for you page. Also, `syntax.css` is available in my [repo](https://github.com/rhgksrua/rhgksrua.github.io/tree/master/resources/css).
