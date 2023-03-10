### 08/24/2021

Today I learned how to set up a package.json file using npm in the terminal. I then added sass and bootstrap and an autoprefixer. Learning how to override Bootstrap styles using a custom.scss. You go into the variables file and copy the variables you will need to override. Still learning that the order of how you import your files into the main scss file matters on how variables are defined.

### 08/26/2021

Today I am still learning/working about overriding Bootstrap5 variables.

### 08/27/2021

I may switch to HTML/CSS/Vanilla JS. I having a hard time with Flexbox and CSS Grid conflicts with Bootstrap.

### 08/28/2021

A fellow coder suggested that I just code with regular HTML for that section if there is a conflict. I decided to start again without Bootstrap.

### 08/31/2021

I've decided to use all of the planet index pages instead of importing the json file. I'm keeping the other files just in case.

### 09/03/2021

I'm going to try to add the information using the data.json file. Wish me luck. I made the planet icons for the mobile menu using Sketch. I am so proud of myself. My planet icons look awesome! For my responsive navigation, I am referring to:

Resources:

- [Let's Build a Responsive Navbar...](https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci)

### 09/04/2021

Today I am working on the responsive navbar. I used a tutorial on dev.to. Posted link yesterday. I was able to add transition and have the mobileNav as an offcanvas menu. I am referring to a fellow coder for importing data into the website. I also researched DOM style using JS.

Resources:

- [Planets Fact Site](https://github.com/KevinGBojan/planets-fact-site) by Kevin G Bojan
- [W3 Schools DOM Style](https://www.w3schools.com/jsref/prop_style_background.asp)

### 09/05/2021

I searched to find an alternative to using `onClick` in my HTML. I was having a hard time finding a way to set up the addEventListener. I will keep searching.

### 09/12/2021

Working on my JS and using the data.json to load information into the webpage.

Resources:

- [Fetch API & Rendering Data with Javascript](https://youtu.be/FN_ffvw_ksE) by Hunter Chang
- [JavaScript Template Literals: JSON to HTML](https://youtu.be/DG4obitDvUA) by LearnWebCode

### 09/16/2021

Still having issues about how to organize my code. I get so caught up in how I should do it that I get stuck in my head.

### 09/18/2021

Still working on my JS. I got the data to appear in my HTML. Now I need to work on my links. Trying to figure out the correct logic.

Resources:

- [Planet Facts Site](https://github.com/nithinmanoj10/Planets-Fact-Site) by Nithinmanoj10

### 09/19/2021

I'm starting again. I've made this too difficult and I'm becoming frustrated. I added the page links to my index.html. Now I will just use JS to add the information.

### 09/21/2021

Working on adding the data to the html. I'm still following KevinGBojan. I added data to the json file so there were less objects as const. Still having problems updating the information when each page is changed.

### 09/26/2021

Back again. Did some more research on using onclick vs addEventListener. The clicking and changing the pages content has held me up.

### 09/30/2021

Did some research on using addEventListeners vs using onClick/onclick. I've seen other coders use onclick & onClick in their HTML for the links that change the planet pages. I've read that using onclick isn't best practice. I had to do more research.

Resources:

- [Use addEventListener() Instead of onclick/oninput/onchange... Especially When Working in Teams](https://medium.com/@ysmiracle/use-addeventlistener-instead-of-onclick-oninput-onchange-especially-when-working-in-teams-50ad40badb8d) by Shun Yao

- [addEventListener vs onclick: Which one should draft into your fantasy football tema?](https://medium.com/@annapeterson89/addeventlistener-vs-onclick-which-one-should-you-draft-into-your-fantasy-football-team-16ea9ae71ee0) by Anna Peterson

### 10/02/2021

Trying to do the JS on my own. Starting again for the fifth time. I finally figured out how to use addEventListener instead of onclick. I was able to put the events for the description buttons in the displayPlanetInfo function.

Resources:

- [Planet Fact Site](https://github.com/aborron/planets-fact-site) by Aborron

### 10092021

I started this project two months ago. it shouldn't have taken me this long to complete this website. My indecision has gotten in the way. I've tried to be efficient. I've researched ways to set up the project. I really wanted to use HTML/CSS/JS. I wanted to import the data into each the page. I've managed to do that. However, I opted to handle the sizing of the images in JS as well. Not sure that was the best thing to do. So, I've decided to go back to the basic information in the JSON file and adjust the image sizes and colors in CSS.

I've also had a battle with onclick, onClick, and addEventListener. I keep reading it's not best practice to use onclick in HTML. Yet, I keep seeing people use this practice. (See 09/30/2021 Notes)

### 10/10/2021

I just saw a Medium article today that I wished I saw when I began this project. It gave 10 signs that you can use to determine if your website needs JavaScript. It was eye-opening and mindblowing! (Well for me it was.) That article points out that many websites are just fine with just CSS and HTML. It doesn't say don't use JS, just use it wisely and sparingly for certain projects. It's also talking about the client-side experience not the server side. It made me realize that I need to determine the amount of JS I use depending on the goal of the site. In this case, since I'm only serving static content and there will be a simple toggle to show information, I don't need to use as much JS to accomplish that task.

I followed aborron as a guide. I added the fetch script to each HTML page. Now I have all of my pages populated with the planet's information.

Resources:

- [10 Signs Your Website Does Not Need JavaScript](https://betterprogramming.pub/10-signs-your-website-does-not-need-javascript-c1a416cdeee8) by E. Correia

- [Planet Fact Site](https://github.com/aborron/planets-fact-site) by Aborron

### 10/17/2021

I'm back. I did some research to figure out how to overlap the planet image and the geology surface image. One coder placed the images as a background image. I tried to see how it could be done with CSS Grid. I didn't have much luck. So, back to positioning I go.

### 10/23/2021

Finally back to working on my project. Now I'm trying to style my pages. I'm using a mix of flex and grid on some of my page sections.

### 10/24/2021

I made some progress today. I used CSS to set the buttons to the planet color on page load. So far it's worked out well.

### 02/05/2022

It's been a while but I am back.

### 02/11/2023

I can't believe it's been a year since I last checked in. My goal is to complete this project and another one that I am behind on. I'm further along in this project than I thought I was.

### 02/14/2023

Happy Valentine's Day! I just realized that I should have used Bootstrap. the functionality works, but I need to do better with the design. I'm going to make an new repository to start that again.

### 02/18/2023

Happy Weekend! I decided to research how to use JS to navigate between the pages without having multiple pages. Basically, I wanted to see if I could make a single page app just using HTML, JS, CSS. So far it has worked!

Resources:

- [Single Page Application Routing Using Hash or URL](https://dev.to/thedevdrawer/single-page-application-routing-using-hash-or-url-9jh)
- [JavaScript Void Keyword Explained](https://www.freecodecamp.org/news/javascript-void-keyword-explained/)
- [nithinmanoj10/Planets-Fact-Site](https://github.com/nithinmanoj10/Planets-Fact-Site): used for guidance in accessing page information for different planets on one page.

### 02/19/2023

Hi. I'm researching how to alter/modify Bootstrap variables to include my colors.

Resources:

- [How to Override Bootstrap Sass Using Sass Variables](https://www.zealousweb.com/how-to-override-bootstrap-sass-using-sass-variables/)
- [How to Customize Bootstrap with Sass](https://www.freecodecamp.org/news/how-to-customize-bootstrap-with-sass/)
- [How to Customize Bootstrap Theme Using Sass](https://dev.to/orighoprecious/how-to-customize-bootstrap-theme-using-sass-54a8)
- [Getting Started: Theming Bootstrap](https://digital.arizona.edu/arizona-bootstrap/docs/2.0/getting-started/theming/)

### 02/25/2023

Hi. I've done a lot of research about overriding Bootstrap's color scheme. I decided to do a slight work-around. Uggggghhh!!! So, why were my overrides were not working? My dumbbutt didn't add the scss file to the main scss file.
I spent a week researching ways to override Bootstrap colors and I was doing it right all of this time.

### 02/26/2023

I realized after spending to much time researching that I needed to simplify my Single Page App to just a multipage website. I was spending too much time to make it work with Vanilla JS, when I should've used React. So, this project will be a multi-page instead of a single page.

### 02/28/2022

Next task: to have page load with Mercury info... I decided to load every page with the overview section detail. I had been obsessing over how to load the information for too long. I need to get better at planning out projects and sticking with the decisions I make for completing them. That is my one problem now. I loaded Mercury, Venus, and Earth. I will load the rest tomorrow. Then I will use JS to add the functionality to the other two sections and pictures on the page.

### 03/01/2023

Hi. Back tonight to add the files to the other planet pages. Added all of the Overview info to all of the planet pages. I readjusted some of the sizing. Need to readjust sizing on tablet and desktop buttons.

### 03/02/2023

Hi. I messed up the sizing somehow. I think I have the same code overlapping in two different scss files. I may have done too much with the scss instead of relying on the Bootstrap. I will work on it tomorrow. I won't merge the commits yet.
