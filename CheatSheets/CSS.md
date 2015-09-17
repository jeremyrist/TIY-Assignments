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

## [margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)

* You can set the margin using margin-top, margin-left, margin-right, and margin-bottom
* You can set the margin using percentages, pixels, em's or auto. Combos also work.

## [padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)

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
* This is a flag in the sand to come back to later...

## [Fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/font)

* The font CSS property is made up of the `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height` and `font-family`.

### [font-style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)

* This can be either `normal`, `italic`, or `oblique`...
* FUN FACT:  italic and oblique look exactly the fucking same but bitches be saying they different.

### [font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)

* Funny enough, "big" is NOT an acceptable font size but `small` is!
* The default _font-size_ is `medium`.
* There are 5 main groups of `font-size values`:
    * absolute-size
    * relative-size
    * length
    * percentage
    * global values

* David suggests using `pt` for font sizes.

### [font-variant](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant)

* This puts a little variety into the fonts.
* For example, `small-caps`, does like an all caps kind of thing but instead of making all the letters big you can still shift the first letter of the beginning of a sentence and it will be bigger than the rest...but the rest are still capital letters.

### [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)

* This determines the weight or boldness of the font.
* It can be `normal` or `bold`, but it can also relate to a parent by being `bolder`.
* Numbers can also be a `font-weight`.
* And `font-weight` can have global values like `inherit`.

### [font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)

* This is the money maker.
* Font family is where you can type fun names like:
      * `cursive`
      * `fantasy`
      * `monospace`
      * `sans-serif`

## [Text](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text)

### [text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

* This tells you how text aligns inside the parent block element.

### [text-color]

* There is no such thing really, it's just called `color`

### [word-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing)

* This tells you how much space is between the words in your text box.
* It can be controlled with `px` or `em`.

### [word-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/word-wrap)

* Is used to specify whether or not the browser may break lines within words in order to prevent overflow when an otherwise unbreakable string is too long to fit in its containing box.
* That's pretty copy-pasta above but I dunno how to say it better.
* If a word is too long to fit in a box you can use `word-wrap` and the value of `break-word` to do so.

### [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)

* Specifies how the text will capitalized.
* Here are examples of how to use this property:
* Keyword values -- capitalize; uppercase; lowercase; none; full-width;
* Global values -- inherit; initial; unset;

## [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)

* On block level elements, the line-height property specifies the minimum height of line boxes within the element.


















bottom
