# [GitHub API](https://developer.github.com/v3/)

## [Authentication](https://developer.github.com/v3/#authentication)

* There are three ways to authenticate through GitHub API v3. Requests that require authentication will return 404 Not Found, instead of 403 Forbidden, in some places. This is to prevent the accidental leakage of private repositories to unauthorized users.

* I can't really understand the rest but in general it seems like logging in should send you to the website and not logging in or repeatedly not getting the right password for your username will return a 403 error page.

> Do I need to authenticate?

* Authenticating is like logging in so yes you need to authenticate

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
