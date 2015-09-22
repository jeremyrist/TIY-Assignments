## `<html>`

the main enchilada, the whole `document`, that which wraps all the others... except for [`<!DOCTYPE>`](#doctype), for some reason.

* _parents_: none, it's the top
* _content_: _only_ [`<head>`](#head) and [`<body>`](#body)
* _display_: without CSS or any styling this just looks like a word document

### Attributes

* `class` -- a space-separated list of category names
* `id` -- a unique identifier that _must_ not appear elsewhere in the document
* `title` -- a short textual description of purpose


## `<div>`

A generic page division that should only be used if no other, more semantic choice is appropriate... and because @al-the-x might kill me if I do when I could use [`<section>`](#section) instead.

* _parents_: anything that accepts [Flow Content][1], which is apparently a lot of things.
* _content_: any [Flow Contant][1], palpable content (WTF?)
* _display_: `block`
* _fact_: David seems to hate this because it's a cop-out type of tag. Like when you run out of options you do this.

###### Footnotes

[1](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)

Structure of HTML tag:
![img](http://www.scriptingmaster.com/images/html/basic-html-tags.GIF)

* HTML uses `< >` as its main characters

## Rules:

* Order is important

* All lowercase

## <DOCTYPE!>:

* <!DOCTYPE> declaration refers to a DTD

* The DTD specifies the rules for the markup language, so that the browsers render the content correctly.

## HTML Tags (Elements):

* <base>

* <head>

* <link>

* <meta>

* <style>

* <title>

* Flag in the sand
