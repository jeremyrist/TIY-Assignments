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
from [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)

* <base> The HTML Base Element (<base>) specifies the base URL to use for all relative URLs contained within a document. There can be only one <base> element in a document.

* <head> The HTML Head Element (<head>) provides general information (metadata) about the document, including its title and links to or definitions of scripts and style sheets.

* <link> The HTML Link Element (<link>) specifies relationships between the current document and an external resource. Possible uses for this element include defining a relational framework for navigation. This Element is most used to link to style sheets.

* <meta> The HTML Meta Element (<meta>) represents any metadata information that cannot be represented by one of the other HTML meta-related elements (<base>, <link>, <script>, <style> or <title>).

* <style> The HTML Style Element (<style>) contains style information for a document, or part of a document. By default, the style instructions written inside that element are expected to be CSS.

* <title> The HTML Title Element (<title>) defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text and any contained tags are not interpreted.

## List Types Galore:

* <ul> stands for `unordered list`. This type of HTML tag is limitless and can contain <li> tags.
      * Think of it as a bulleted list.
      * Also you can have <ul>s inside of <ul>s inside of <ul>s and it will change the bulleted appearance.

* <ol> is the exact same but just in a numerical order.

* <li> stands for `list item`...so naturally it represents the tag for items in lists...
      * You can find these guys inside of <ul>s or <ol> or even <menu>s.

* [<menu>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu)
      * The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.
      * Flag in the sand

* <dl> does not stand for "down-low", it stands for "definition list".
      * This is commonly used with glossaries or with metadata.
      * It seems to have some style to it.
      * It is the beginning of a pattern like this...
      `<dl>
          <dt>
              <dd>
              <dd>
              </dd>
              </dd>
          </dt>
       </dl>`

* <dt> stands for "definition term" and it identifies a term in a definition list.
      * <dt> can also be seen to stand for "title" because that seems to be part of its function as well.

* <dd> is the description of the term.
