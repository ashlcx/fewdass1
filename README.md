# Front End Web Design

Access [here](https://hines-front-end-assignment-1.herokuapp.com/)

## Assignment 1 - Contour 556

For this website I wanted an incredibly minimalistic style, especially for mobile users, with the exception being the homepage, where I show an array of images.

I really like mobile websites with a centered logo with menus and other buttons on the side so that was my basis for my nav design, however I could of added in some psuedo-elements like hover and active, I think those features would add an overall polished feel to the site.

For the content pages, I focused on the content instead of the view of the site, the contour 556 exhibitioon should be seen in person, the content should just tease the readers into what they will see in person.

Finnaly with the footer, I kept it incredibly minimal, only providing link to the socials as I belive no other content minus maybe a copywrite notice is nessecary. It could probably be expanded upon on the desktop view however

### Things I did Well

- Made use of modern tooling and libraries - Using Nodejs for librariy imports simplified how I attach JQuery and other libraries and by using handlebars I can push all of my pages into a single file increasing performance and reducing code duplication. In a way I kind of created my own incredibly trash static code generator.
- The background contours - Whilst I didnt have the time to create a contour for canberra, using a contour in the background as an active element adds to the sites overal story and matches nicely with the element of the project, annoyingly the colour requires a tonne of filtering to be accessible and just even readible to an able viewer.
- I tried and think I wrote it fairly well self-documenting, I could probably do with more comments but by seperating all the elements into individual files it made accessing the correct parts alot easier.
- CSS Grids/Flexbox. The about us page flexbox works as perfectly as I wanted it to, I didnt want to have to specify how many columns for a tablet/desktop but the min size part and the gap was just not working the way I wanted.
- Dark mode - As painful as it was, it works nicely.
- Mobile First - This is the first time I've created a front-end mobile first and I think i will follow that process in the future, ive always struggled getting a desktop site mobile and I was glad I got it down packed.

### Things I can Improve

- Assign more time in the design stage understanding how I want my layouts to be and not just on the fly. I think I spent more time tweaking then actually effectively writing code.
- Colour palette - Just black and white arent the best but they work. Mostly.
- I used SASS/SCSS (I before brackets over indenting) to seperate my css and easily style children, I know i can do the scss alot better to reduce duplication but that is a part of learning the tooling.
- Navigation - The nav menu is a massive hack, hiding elements based on mobile/desktop could of been done alot better, but finding a better way would of taken up to much time due to my inherit skill of procastination.
