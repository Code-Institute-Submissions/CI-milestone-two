# Denis Lymer Milestone Project 2 - Movie Recommendation Website - 'Should I Watch This?'
My idea for my Milestone 2 project came from an almost throwaway comment from my girlfriend. While trying to select something for us to watch that evening, she had spent 20 minutes just browsing the options avaialble on Netflix and Amazon Prime.
"It's so hard to know if any of these will be good or not" she said. I immediately thought how right she was and how even the recommendations these sites supply based on your previous viewing history often turned out to be terrible.
We usually ended up checking reviews across multiple sites and publishers, which were often contradictory, before we settled on something, a time-consuming process in itself. 
It occured to me that one single, no-frills search engine that pulls back review scores from respected sites like ImDB, Rotten Tomatoes etc would be really useful, especially considering how much time we are all spending on our couches during this pandemic.

I settled on the name 'Should I Watch This?' or 'SIWT?' for short.  I endeavoured to keep the site as streamlined as possible.
Throughout the process of coding the site, I kept in mind how irritating I found other movie review sites which are full of ads, predictive text searches, slow-running etc.. and tried to only include the necessary feautures in my own site.
As Matt Rudge says a few times in the Code Institute video tutorials: "A good programmer is a lazy programmer", with this in mind I decided to use a bootstrap template to get me started. I believe my Milestone One project demonstrated my skills in HTML and CSS, so I decided to save myself some time here and focus on getting the API functionality correct.
Early in the development stages I decided to ditch the standalone home page and search pages I had planned and instead had the search bar prominently featured on the landing page. Any results would be displayed directly below this 
and if a user could see the item they were looking for, clicking on it would bring them to a separate page with additional info.

The Code Institute tutorials regarding APIs did not cover what I was hoping to achieve here so I undertook quite a bit of external learning before and during the development of this project.
As I progressed it became apparent that my hopes of connecting to multiple APIs were not achievable because the established, recognisable sites all charge for access. Sadly I can't afford this at the moment so I settled on the one free, reliable API that I could find which had a large database: 'TMBD'.
In lieu of including established, paid access APIs I included a link to the ImDB page for each search result available to my site users.

At the suggestion of my mentor I also decided to include chat functionality, via the Disqus app, under the search results and on a seperate dedicated Forum page.

## Link to the website

https://menacethedenis.github.io/CI-milestone-two/

## Link to the github repository

https://github.com/menacethedenis/CI-milestone-two

# UX

I wanted to create a website that would prove useful for anyone looking to view ratings for movies and tv shows and display them in a streamlined, no-nonsense layout. 
'Keep it simple' was the mantra I kept repeating to myself and I tried to keep every feature just one-click away.

### **User Stories**

Bearing in mind the features of other sites which frustrated me when using them, I created the following user stories:
* As a user I want to be able to easily access movie review scores.
* As a user I want an easy to use site providing a streamlined experience, the opposite of what more established sites provide.
* As a user I want to be able to search for my movie with no difficulty and see results instantly.
* As a user if I search for something that may have multiple results (such as 'Star Wars') than all relevant results should be displayed.
* As a user I would like to discuss the movies I like or dislike with other users.

### **Wire frames**

I used the Balsamiq desktop app to develop wireframes to use as guidelines for my page layouts.
I focused on mobile first design, then tablet sizing and then desktop layout.
You can see in the wireframes I had originally planned a seperate page for the search functionality but decided to incorporate it into the main page to match my user story focusing on ease of use.

The wireframes are available to view on a .pdf in the assets folder of this project:
assets/wireframes/Wireframes_Milestone2_Denis Lymer.pdf

Download link:
https://c28e0d1a-181e-43e6-a8c0-f2acb6318d5f.ws-us02.gitpod.io/files/download/?id=732003e4-baf5-4fa6-a412-9aa1dda7f8fb

# Features

## Existing Features

### **General**

* Feature 1: Navbar: In keeping with my 'one-click away' philosophy for this site, I decided to leave the Navbar links open and visible across all screen sizes.
* Feature 2: Footer: The footer has working links to social media sites on the right and to the About page on the left. The icons are from Font-Awesome.
* Feature 3: Theme: I used a bootstrap template from bootswatch.com to kickstart my css and layouts.

### **Home page**

* Feature 4: Search bar - The home page prominently displays a brief message detailing the site's purpose and a large search bar with a search prompt. This should instantly let the user know what the site is for.
* Feature 5: Results - Using Javascript the search function connnects to the TMDB API and pulls back results to the browser window. The user can see the movie or tv show's poster, name and a button underneath labelled 'Details'.
* Feature 6: Lower page Image - The frustrated/scared woman repeating image only appears on large screens. CSS media queries were used to remove it on tablet and mobile screen sizes.

### **Details page**

* Feature 7: Detailed results - When a user clicks the 'Details' button under the search results the site navigates to a new page. Here a user can view details about the movie such as title and poster image. Rating, Tagline, Genre, Release Date and Runtime.
* Feature 8: Plot - The movie plot is displayed beneath the detailed results.
* Feature 9: View ImDB button - This button links to the ImDB page for the selected movie. This function is included in lieu of having to pay for API access.
* Feature 10: Go back - The user can return to the search/main page here if they are not happy with the result or want to check for something else.
* Feature 11: Disqus app - At the bottom of the page a fully functional Disqus app is embedded. This allows users to login and caht to other users about the particular movie.

### **About page**

* Feature 12: About section - This contains a brief mission statement. There is a link to the Forum page in the text. There is also a copyright-free placeholder image in lieu of a proper website logo. This only appears on large screens. It does not display on tablet or mobile sizes, the mission statment is centred instead.
* Feature 13: Footer - The link to About that appears on other pages footers is changed to allow the user to navigate back to the search/home page instead.

### **Forum page**

* Feature 14: Disqus app - This page is dedicated to the Disqus app so users can chat to each other outside of search results. There is a brief disclaimer displayed at the top of the page.


## Features Left to Implement

* I would have loved to spend more time on this project. I will definitely be returning to it once I have completed the course as I believe it has strong potential to be a going concern. Unfortunately I am up against the clock now in terms of my finish date so need to move on.
The CSS in general could be slicker. I will look into overhauling that.
* I would like to recode the javascript to connect to more APIs from established sites. That will require monetary investment but is something I would like to do once I am employed again.


# Technologies Used

## HTML5 - https://www.w3.org/TR/html52/
HTML5 was used for the general structuring and positioning on the website.

## CSS3 - https://www.w3.org/Style/CSS/Overview.en.html
CSS3 was used to style the website.

## Bootswatch - https://bootswatch.com/
Bootswatch offer free Bootstrap templates. I used the Solar template to base my HTML and CSS stylings and layout on: https://bootswatch.com/solar/

## Bootstrap - https://www.bootstrapcdn.com/
Bootstrap v4.3.1 was used via Bootswatch template for mobile-first design and responsiveness, styling, grid layouts and navigation.

## JQuery - https://jquery.com/
JQuery was used to deploy javascript functionality with bootstrap/bootswatch.

## Javascript - https://www.javascript.com/
Javascript was used to access the API and manipulate the results, based on search info inputted by the user.

## Font Awesome - https://www.bootstrapcdn.com/fontawesome/
Font Awesome V4.7.0 icons were used for the Social Media links in the footer.

## Git, Gitpod & Github - https://github.com/
Gitpod was used as the development environment. Git was used to push my work from my local repository to my Github repository. Github hosts the project repository for others to see and the final deployed version of the website.

# Testing

## Manual Testing
Based on feedback from My Milestone one project, this time around I documented my testing in a word document. This is available to view in the assets folder of this project or can be downloaded directly at: https://c28e0d1a-181e-43e6-a8c0-f2acb6318d5f.ws-us02.gitpod.io/files/download/?id=84ab1048-22ab-45a8-91e9-ca88f2e8cd78 

You will see a long gap in testing dates between July and September, this is due to my emigrating from Ireland which interrupted development on the project. In addition to the word doc, similar to my milestone one project, as I was building this project I was ensuring to test the functionality of pagelinks, external links, navigation, features and elements as I was proceeding. At the end of every session I not only checked any new features I had added, but also all my existing features to ensure any changes I had made had not adversely affected other existing features.

All code was checked with the following validator: https://validator.w3.org/

## Responsiveness Testing with Chrome DevTools
All website pages have been extensively tested for mobile-first responsiveness using Chrome DevTools. I personally checked responsiveness on the following devices:
* Android 10 phone
* Android 10 tablet 
* Windows 10 laptop
* Windows 10 desktop

Some colleagues were asked to check responsiveness on:
* iPad - iPadOS 13.5
* iPhone - iOS 13.5
* iMac - MacOS 10.15

# Deployment
 I started this project by using the Code Institute template available on Github at: https://github.com/Code-Institute-Org/gitpod-full-template. As I was building the project I was regularly saving my work using the Git Add functionality and tracking my changes with descriptive messages using the Git Commit functionality. I used Git Push to send to the remote repository. I was able to pick up exactly where I left off by clicking on the Gitpod button to access my workspace on the remote repository. When the project was finished I accessed the settings menu and activated GitHub Pages.
 
 Other users can clone the project by entering the following command in their terminal: Git Clone https://github.com/menacethedenis/CI-milestone-two.git
 
 The finished website is deployed and can be viewed via Github pages:
 https://menacethedenis.github.io/CI-milestone-two/

# Credits
## Content

As the API functionality I wanted to use in this project was not covered in the Code Institute tutorials, I had to do a great deal of external research and learning over the course of this project. Some of the sites I found very helpful in general were:
https://rapidapi.com/blog/how-to-use-an-api-with-javascript/
https://www.youtube.com/watch?v=YsPqjYGauns
https://www.youtube.com/user/TechGuyWeb
https://www.youtube.com/user/shiffman
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction

For the Javascipt functionality I relied heavily on Github and Stack Overflow threads for more detailed understanding. I repurposed or reused some code snippets from some of the following:

https://stackoverflow.com/questions/957537/how-can-i-display-a-javascript-object/4293047#4293047
https://stackoverflow.com/questions/1625208/print-content-of-javascript-object?noredirect=1&lq=1
https://stackoverflow.com/questions/1966503/does-imdb-provide-an-api
https://github.com/algolia/algoliasearch-client-javascript
https://github.com/EmmaSemutenga/movieInfo/blob/master/js/main.js
https://github.com/bvaughn/js-worker-search
https://github.com/FriesFlorian/viralvideos
https://github.com/anshulrgoyal/imdb-scrapper

The free API database I used was The Movie Database (TMDB):

https://developers.themoviedb.org/3/movies/get-movie-credits

I also linked search results to the more established and well-known review site ImDB:

https://www.imdb.com/

## Acknowledgements
I would like to thank the tutors at the Code Institute and my mentor Spencer Barriball for their outstanding support, advice and encouragement. Neil Kavanagh who graded my Milestone One project also gave me some excellent and useful feedback.

Thanks also to the Code Institute student care team for keeping me on track, checking in and always being so understanding, empathetic and helpful.
