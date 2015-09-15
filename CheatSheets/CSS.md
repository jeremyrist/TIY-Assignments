# Reading CSS

## Selectors

#### Example:

strong {
  color: red;
}

* In this example _strong_ is the selector
* What's in the curly braces is a `declaration`
* _Color_ is called a `property`
* _Red_ is called a `value`
* _Strong_ can also be more specifically called a `tag selector`

* Class selectors and ID selectors are different
* Class is signified with the .
* id is signified with a #

## Properties

* Block (typically `div` elements)
* Span (typically `span elements`)
* None makes the element look like it doesn't exist

* There's also
  ** table
  ** flex
  ** grid
  ** ruby
  ** and more...


### [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

The text color of an element and its decorations don't affect the characteristics of the element.
A better name for it would be text-color, and they all have to be uniform.
This is where you use dash notation, like #00ff00, also called RGB hex values.
But it's also cool to just say something like color: red.

#### Possible Values: [any `<color>` value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

* a hexadecimal color value: `#012345`, `#CCC`
* a color keyword: `cornflowerblue`, `purple`, `orange`
* RGB decimal notation: `rgb(0,0,0)`, `rgb(255, 255, 255)`
* RGBa (transparency) notation: `rgba(0,0,0,0)`, `rgba(255, 255, 255, 0.8)`
* HSL decimal notation: `hsl(0, 100%, 50%)`
