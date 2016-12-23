![Star Query](https://github.com/jodiegardiner/jodiegardiner.github.io/blob/master/swapi-proj/img/logo.png "Star Query")

# Star Query v1.1
## search a galaxy far, far away

[Star Query Live Version](http://jodiegardiner.github.io/swapi-proj)

# Stream 1 project - Front End development

Simple responsive app to look up Star Wars trivia.

### Technologies used:
* Angular routing
* Bootstrap
* CSS
* JQuery

### Third-party resources used:
* [SWAPI](http://swapi.co)
* [Star wars intro crawl](https://polarnotion.github.io/starwarsintro/)
* [Hover.css](http://ianlunn.github.io/Hover/)


### Rationale
I wanted to hit an API as part of my project just to solidify what we had covered in class and when I found the SWAPI project, as a lover of all things Star Wars, I was instantly attracted to it.

At first I simply had all the data coming out in tables but it wasn't very impactful or particularly aesthetically pleasing so after that I found out about Modals and then used a select few fields for the search result tables and put the bulk of the information into the modal body.

### Issues encountered
One of the main issues was that the API structure was such that a lot of the relevant information was buried a couple of levels deep - in other words, rather than the object that came back from the ajax call having useful properties to access throughout, it instead often had URLs to different endpoints within the API.  This meant that I had to nest API calls within the success function of other API calls.  This took quite a while to figure out.

Later, when I was looking back through my code, searching for places I could refactor it to remove duplication, I found that each of the three pages and their associated js files contained a repeated element - which films the person, ship or vehicle has appeared in.  This introduced me to the idea of being able to create one function that generated those that could be called from within each individual js file.  That was a big "eureka" moment in terms of my understanding of how the javascript jigsaw pieces fit together. This fundamental concept of coding was a language-independent piece of knowledge that would serve me well for my Stream 3 project too (and no doubt more or less everything I write from here on out).  Later, I realised that the modals for starships and vehicles contained effectively identical data too, so this is another area which could be served by a call to a single function if I was to recreate this in future.

Another ugly issue I encountered was when viewing the app on a mobile device.  Originally the buttons were taller and on some devices this meant that when you clicked them, the search box would appear just ever so slightly off the bottom of the screen, making it not readily apparent in some cases that anything had happened at all.  I fixed this by reducing the button height by about half.

### Design
In terms of the overall look and feel of the site, I wanted it to be fairly simple but effective.  I used the exact same colour theme from the SWAPI page itself, quite deliberately.  It suited the space theme well and offered good contrasting colours to the text.

I did consider using a more robust bootstrap theme just to spice up the elements themselves, but decided to go with my own design in the end, mostly because I wanted the attention of the user on the data, and not on the "bling".

Having said that, switching the ajax searches to run on keyup, rather than on click made a massive difference in how slick it felt to use.  For most users this is just the expected behaviour on a quality search input now (such as Google) and I was amazed how much bang for the buck I got out of that one tiny change to the underlying code.

I wanted the navigation to be simple and not require the user to have to click more than once to search in another area.  If you are viewing the results of a People search, one click lets you begin typing immediately in Ships or Vehicles, and the Angular routing means that those buttons are always available no matter which search panel is open below them.

I threw in the familiar star wars crawl on the about link just to have a little easter egg for my classmates and teachers, and also because it was mind-blowing for me as someone who didn't know what a CSS selector was 3 weeks previously that such a thing could be achieved entirely using CSS with no javascript in it whatsoever.
