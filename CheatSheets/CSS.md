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
* `None` makes the element look like it doesn't exist

### There's also:
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

## [CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

![CSS Box Model EXPLAINED!](http://3.bp.blogspot.com/-l8TsrarMIjQ/VX1WhBoHjvI/AAAAAAAAAcs/jtJpal-a3no/s1600/box-model.png)
> from http://www.geekstuff4all.net/2015/06/the-css-box-model.html

* Each element gets represented as a rectangular box, whether you like it or not.
* You can control the size, color, background, borders aspect, and position of the box.
* The _content area_ is the area with the content.
* It's located inside the _content edge_.
* Its dimensions are the _content width_ and _content height_.
* The _padding area_ is outside of that.
* The _border edge_ is outside of that.
* And the _margin edge_ is outside of that.

## [Margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)

* You can set the margin using margin-top, margin-left, margin-right, and margin-bottom
* You can set the margin using percentages, pixels, em's or auto. Combos also work.

## [Padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)

* The padding element works for all sides of the rectangle or square element.
* The padding is the space between the content and the border.
* It works similar to the margin.

## border

* The area around an element.

## [Max](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)

* This is the copy pasta of the Max element because I don't fully understand it.
* The max-height property is used to set the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.
* The max-width works similarly.

## [Min](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height)

* The min-height value, similar to the min-width, prevents an element from ever going below a min-height.
* It can override a max-height.
* Copy pasta: The min-height property is used to set the minimum height of a given element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.

## [Box Sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

* Copy pasta: The box-sizing property is used to alter the default CSS box model used to calculate widths and heights of elements.
* This seems aggressive.
