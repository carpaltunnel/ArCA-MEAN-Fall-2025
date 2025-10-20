# Cascading Style Sheets (CSS)
CSS is how we control the look and feel of our HTML pages.  You should always strive to keep the style separate from your HTML, even though it's possible to embed styling directly into it.  HTML pages should contain only the content and all styling should be done in CSS where possible.  By keeping the style and content separate we can completely change the look and layout of a HTML page by using different style sheets.  If you've seen websites that have a "normal" mode and a "dark" mode, this is typically how that is done.  There are two CSS files, one for normal and one for dark, that can be switched between.  It also allows us to target styles specifically to desktops or specifically to mobile devices.  However, this approach has been generally deprecated for a "mobile first" design that is flexible enough to display correctly on both mobile and desktop devices.

Obligatory CSS Joke : https://toggl.com/blog/bad-career-advice-books

## Syntax
The basic CSS syntax is very similar to Javascript objects and JSON with a few minor differences.

```css
body {
  background-color: white;
  color: black;
  text-align: center;
}
```

The example above defines CSS properties to be assigned to the `body` tag.  This declares that the `body` tag will have the following style attributes :
1. The background color will be white
2. The text color will be black
3. The text will be centered within the tag body

## Basic Selectors
CSS selectors provide a powerful and flexible way to specify (or select) which HTML elements the style will be applied to.  

1. `#id` - A selector that starts with a `#` indicates that it applies to HTML elements that have the specified `id` property.  For example, `#example` would select the HTML element that is defined with `id="example"`.  Keep in mind that `id` properties should be unique in your HTML - only one element should have a specific `id`.
2. `.class` - A selector that starts with a period indicates that it applies to a class having the name that follows it.  For example, `.spanner` would select all HTML elements that have `class="spanner"`.  Remember that multiple elements may have the same class assigned to them.
3. `element` - As we saw in the first example, simply specifying an element name/type will apply to all elements of that type.  While we used `body` in our first example, and there should be only one `body` tag, it can apply to multiple elements.  An example of that would be `span`, where the CSS will apply to all `span` tags in your HTML.

We'll start with these three basic selectors for our examples then discuss the more complex ones in the future.

## Using CSS in HTML Documents
For our simple examples we're going to embed the CSS directly into our HTML.  However, since your CSS files are likely to grow quite large and be used on multiple pages, it is a better practice to maintain them separate from the HTML.  Below are examples of each usage.

Embedded CSS, which we'll use to simplify our examples (also good for temporary testing) : 
```html
<html>
  <head>
    <title>My Title</title>
    <style type="text/css">
      body {
        background-color: white;
        color: black;
        text-align: center;
      }
    </style>
  </head>
  <body>Body text</body>
</html>
```

External CSS, which is what will normally be used in "real world" projects.  This example assumes you have created a file named "my-page-style.css" and it is located in the same directory as your HTML.  However, you can link to full URLs anywhere on the internet (hint: CDNs).
```html
<html>
  <head>
    <title>My Title</title>
    <link href="my-page-style.css" rel="stylesheet">
  </head>
</html>
```

## Properties
https://www.w3schools.com/cssref/default.asp

## Color Representation
"by name" 

"by hex code"

https://www.w3schools.com/cssref/css_colors.asp

## Units
https://www.w3schools.com/cssref/css_units.asp
px, %, em, 

Absolute vs Relative units

Absolute : cm, mm, in, px (1px = 1/96th of 1in), pt (1pt = 1/72 of 1in), pc (picas : 1pc = 12pt)

Relative : em, ex, ch, rem, vw, vh, vmin, vmax, %





## Advanced Selectors
https://www.w3schools.com/cssref/css_selectors.asp

