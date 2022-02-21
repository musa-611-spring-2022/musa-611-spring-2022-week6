## Getting Elements Using Basic Attributes

You have several options for getting elements from a document. The first set of options are tailor-made for a few specific types of element attributes.

Let's say you have the following HTML code:

```html
<div id="my-school-map" class="my-map-class"></div>     <!-- #1 -->
<div id="my-park-map" class="my-map-class"></div>       <!-- #2 -->
<div id="my-income-chart" class="my-chart-class"></div> <!-- #3 -->
```

The following are a few options for accessing these elements:

```js
document.getElementById('my-school-map'); // Returns element #1
document.getElementsByClassName('my-map-class'); // Returns elements #1 & #2
document.getElementsByTagName('div'); // Returns elements #1, #2, & #3
```

Note that the `getElementsByClassName` and `getElementsByTagName` functions are
_always_ plural, as opposed to `getElementById`; an element's `id` attribute is
intended to be unique, where as an element's `class` is intended to not be, and of course there can be multiple elements on a page for any tag. So

## Getting Elements Using CSS Selector Syntax

Selectors were originally developed as part of the Cascading Style Sheets (CSS)
language to identify which elements to style on a page. Over time, developers
found that they were also useful as a syntax for specifying elements for other
purposes besides styling as well.

CSS selectors are a query syntax. With them, you are querying the document to
find elements that match the selector. Various types of selectors can be mixed
and combined into some pretty sophisticated queries, but we'll just cover some
of the basic selectors here.

### Basic CSS Selector Syntax

Types of basic selectors:
* Element type selectors
* ID selectors
* Class selectors
* Attribute selectors
* Universal selectors

#### Element Type Selector

Selects HTML elements by tag name. For example, the following CSS will give all
`<p>` elements on a page centered text:

```css
p {
  text-align: center;
}
```

#### ID Selector

Select the HTML element with the specific ID attribute. An ID selector is
written with a hash character (`#`) followed by the `id` of the element. For
example, the following CSS will give the element with `id="my-title"` bolded
text. It doesn't care if the element is a paragraph, a heading, or anything
else:

```css
#my-title {
  font-weight: bold;
}
```

#### Class Selector

Select the HTML elements with the specific class attribute. A class can belong
to multiple elements, and each element can have multiple classes. A class
selector is written with a dot character (`.`) followed by the `class` of the
element. For example, the following CSS will give the elements with a `class`
attribute containing `"my-special-class"` a yellow background, regardless of the
ID or types of the elements:

```css
.my-special-class {
  background-color: yellow;
}
```

#### Universal Selector

Select HTML elements of any type with any attributes. A universal selector is
written with an asterisk character (`*`). For example, with this code we can set
the font on all elements to Comic Sans MS:

```css
* {
  font-family: 'Comic Sans MS';
}
```

#### More Complex Selectors

You can combine CSS selectors to create more complex element queries. Just as an exaple, here is a selector that matches the first `<div>` element within each `<section>` element:

```css
section > div:first-child {
  ...
}
```

And here's a selector that matches each odd `<li>` element (e.g., the 1st, 3rd, 5th, etc.) inside of lists with a `striped-list` class:

```css
.striped-list > li:nth-child(odd) {
  ...
}
```

For more information, see the MDN documentation on [CSS Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors).

### Using the `querySelector`[`All`] Functions

As you can see, CSS selectors are a fairly flexible syntax for _querying_ the
document for a set of elements. The `querySelector` and `querySelectorAll`
functions use CSS selector syntax to identify and return elements using this
selector syntax.

* Benefits of `querySelector`[`All`]:
  * One general-purpose function instead of three separate ones
  * Once you're comfortable with CSS selectors, you can get very specific about
    which elements you want to select using a flexible query language.

* Drawbacks of `querySelector`[`All`]:
  * Relatively slow (compared to the `getElement[s]ByXxx` functions). However,
    the speed difference usually doesn't matter; "relatively slow" is still
    really fast by human standards.

Let's revisit the HTML from above:

```html
<div id="my-school-map" class="my-map-class"></div>     <!-- #1 -->
<div id="my-park-map" class="my-map-class"></div>       <!-- #2 -->
<div id="my-income-chart" class="my-chart-class"></div> <!-- #3 -->
```

* Using `querySelector`

  ```js
  document.querySelector('#my-school-map'); // Returns element #1
  document.querySelector('.my-map-class'); // Returns element #1
  document.querySelector('div'); // Returns element #1
  ```

  Note that even when the selector provided would match many elements, the
  `querySelector` function will only return the _first_ matched element (or
  `null` if none are found). It is not a typo that all three of those statements
  return element #1.

* Using `querySelectorAll`

  ```js
  document.querySelectorAll('#my-school-map'); // Returns element #1
  document.querySelectorAll('.my-map-class'); // Returns elements #1 & #2
  document.querySelectorAll('div'); // Returns elements #1, #2, & #3
  ```

  Note that even when the selector provided would match only one element, the
  `querySelectorAll` function will essentially return an array of that one
  element object. This differs from `querySelector` which will only ever return
  an element object (or `null`). In other words:

  ```js
  document.querySelectorAll('div')[0] === document.querySelector('div');
  ```
