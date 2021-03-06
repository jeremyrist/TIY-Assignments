# [GitHub API](https://developer.github.com/v3/)

## [Authentication](https://developer.github.com/v3/#authentication)

* There are three ways to authenticate through GitHub API v3. Requests that require authentication will return 404 Not Found, instead of 403 Forbidden, in some places. This is to prevent the accidental leakage of private repositories to unauthorized users.

* I can't really understand the rest but in general it seems like logging in should send you to the website and not logging in or repeatedly not getting the right password for your username will return a 403 error page.

> Do I need to authenticate?

* Authenticating is like logging in so yes you need to authenticate (?)

> What can I do with an unauthenticated request?

* Log in to the page

> What _can't_ I do with an unauthenticated request?

* Log in

> How can I authenticate my request?

* By typing the right password for your login name

1. First way -- with some description of what that is
```
// and perhaps some code example?
```
2. Second way -- and more descriptive text
```
// and another code example
```
3. Third way -- yep, include a short description
```
// with another code example
```

## [Users](https://developer.github.com/v3/users/)

> How do I ask the API for the profile information for a specific user?

`GET /users/:username`

* But there are other types of users!

* Authenticated users, aka ones that have logged in, can be got simply by:

`GET /user`

## [Repositories](https://developer.github.com/v3/repos/)

> How do I ask the API for my Repository information?

`GET /user/repo`

> The pattern repeats after that with list and organization repositories

> How do you create a new repository?

`POST /user/repos`

> Basically it seems like you put your function in all caps like DELETE and then where you want that to happen afterwards

`DELETE /repos/:owner/:repo`

## [Detailed Representation](https://developer.github.com/v3/#authentication)

* When you get something from Github you get the WHOLE thing.

* In GitHub language, which is a similar dialect to MDN, it says:

_When you fetch an individual resource, the response typically includes all attributes for that resource. This is the “detailed” representation of the resource. (Note that authorization sometimes influences the amount of detail included in the representation.)_

## [Git Data](https://developer.github.com/v3/git/)

* I read this but didn't totally understand it.


FLAG IN THE SAND
FLAG IN THE SAND
FLAG IN THE SAND


###What are the endpoints for fetching...###
* the profile data for a user?
> https://github.com/octocat

* the organizations a user belongs to?
> https://api.github.com/users/octocat/orgs

* the repositories a user has created?
> https://api.github.com/users/octocat/repos

* a filtered list of repositories?
> GET search/repositories/fork will give you a filtered list based on forks
> There's other typs of searches like created or pushed that do a similar thing
> I'm not sure if it's GET fork/repositories or what...

* a sorted list of repositories?
> I don't think I get the difference btw filtering and sorting

* public events for a user?
> https://api.github.com/users/octocat/events{/privacy} or GET /events

###When fetching public events for a user...###
* How many results are returned by default?
> 30 or 10?

* What limitations exist on fetching more results?
> The fixed page size is 30 items. Fetching up to ten pages is supported, for a total of 300 events.

* What is the basic structure of the results?
> FLAG IN THE SAND

* What fields are included in each result?
> FLAG IN THE SAND

* What are the data types for each field?
> Arrays of definitions?

* What are some of the different values for the type field?
> URLS and numbers?

FLAG IN THE SAND
FLAG IN THE SAND
FLAG IN THE SAND

* How can I use the Github API to...
  * get all the comments for a particular issue?
  * add a comment to an issue?

And since libraries like jQuery and Lodash have feelings... I mean _APIs_, too, read through some of the documentation to answer these questions:

### How can I use [the jQuery API](http://api.jquery.com) to...
  * get the HTML contents of an element?
  > .html()

  * create a _new_ HTML element?
  > .addHTML(?)

  > .addHeader(?)      

  * add an HTML element to the page?
  > .addClass()

### How can I use [the Lodash API](http://lodash.com/docs/) to...
  * replace placeholders with values from an object?
  > Is the place holder literally an `_`?

  * repeat code for every item of an array?
  > _.repeat("hello", 18);
