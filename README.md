# Denis Lymer Milestone Project 2 - Movie Recommendation Website - 'Should I Watch This?'
My idea for my Milestone 2 project came from an almost throwaway comment from my girlfriend. While trying to select something for us to watch that evening, she had spent 20 minutes just browsing the options avaialble on Netflix and Amazon Prime.
"It's so hard to know if any of these will be good or not" she said. I immediately thought how right she was and how even the recommendations these sites supply based on your previous viewing history often turned out to be terrible.
We usually ended up checking reviews across multiple sites and publishers, which were often contradictory, before we settled on something, a time-consuming process in itself. 
It occured to me that one single, no-frills search engine that pulls back review scores from respected sites like ImDB, Rotten Tomatoes etc would be really useful, especially considering how much time we are all spending on our couches during this pandemic.

I settled on the name 'Should I Watch This?' or 'SIWT?' for short. As Matt Rudge says a few times in the Code Institute video tutorials: "A good programmer is a lazy programmer", I endeavoured to keep the site as streamlined as possible.
Throughout the process of coding the site, I kept in mind how irritating I found other movie review sites which are full of ads, predictive text searches, slow-running etc.. and tried to only include the necessary feautures in my own site.
I also decided to use a bootstrap template to get me started. I believe my Milestone One project demonstrated my skills in HTML and CSS, so I decided to save myself some time here and focus on getting the API functionality correct.
Early in the devlopment stages I decided to ditch the standalone home page and search pages I had planned and instead had the search bar prominently featured on the landing page. Any results would be displayed deirectly below this 
and if a user could see the item they were lookking for, clicking on it would bring them to a seperate page with additional info.

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

* Feature 4: Serach bar - The home page prominently displays a brief message detailing the site's purpose and a large search bar with a search prompt. This should instantly let the user know what the site is for.
* Feature 5: Results - Using Javascript the search function connnects to the TMDB API and pulls back results to the browser window. The user can see the movie or tv show's poster, name and a button underneath labelled 'Details'.
* Feature 6: Lower page Image - The frustrated/scared woman repeating image only appears on large screens. CSS media queries were used to remove it on tablet and mobile screen sizes.

### **Details page**

* Feature 10: Bandcamp embeds - The music page has bandcamp embeds of all the bands releases displayed vertically in reverse chronological order. The user can stream or share music directly from these, or access the band's bandcamp page externally. I experimented with an opaque background image and displaying the embeds in columns and rows but preferred the vertical presentation and black background as I felt it focussed atttention on each individual release.

### **Bio page**

* Feature 11: About section - This contains a brief history of the band and a working link to the band's record label website.
* Feature 12: Discography section - This contains information about the band's releases displayed as a timeline. When a release title is hovered over, the artwork of the release appears. This effect is disabled on smaller viewports via a CSS Media Query. The release dates are hidden on smaller viewports as they were cluttering the display.
* Feature 13: Review section - This contains excerpts from published reviews of the band.

### **Store page**

* Feature 14: Big Cartel links: This page displays images of band merchandise which is available to purchase from their big cartel webstore. They display horizontally on larger viewports and vertically on smaller viewports. There is a hover opacity effect on each image. I experimented with embedding the big cartel pages via iFrames but they did not display well so decided images with external links was a better option.


## Features Left to Implement

* The ability to record users answers to the cookie disclaimer needs to be added. Currently the warning can be closed with the 'x' in the corner only.
* The contact form needs to be hooked up on the backend.


# Technologies Used

## HTML5 - https://www.w3.org/TR/html52/
HTML5 was used for the general structuring and positioning on the website.

## CSS3 - https://www.w3.org/Style/CSS/Overview.en.html
CSS3 was used to style the website.

## Bootstrap - https://www.bootstrapcdn.com/
Bootstrap v4.3.1 was used for mobile-first design and responsiveness, styling, grid layouts and navigation.

## JQuery - https://jquery.com/
JQuery was used to deploy javascript functionality with bootstrap.

## Font Awesome - https://www.bootstrapcdn.com/fontawesome/
Font Awesome icons were used for the Social Media & Stream Music inks in the footer, and for the menu items in the large menu bar.

## Google Fonts - https://fonts.google.com/
Google fonts were used for all the text on the website. The fonts used were Quicksand & Rokkitt.

## Git, Gitpod & Github - https://github.com/
Gitpod was used as the development environment. Git was used to push my work from my local repository to my Github repository. Github hosts the project repository for others to see and the final deployed version of the website.

# Testing

## Manual Testing
As I was building this project I was ensuring to test the functionality of pagelinks, external links, navigation, features and elements as I was proceeding. At the end of every session I not only checked any new features I had added, but also all my existing features to ensure any changes I had made had not adversely affected other existing features. I used a word document to track features that were not working correctly or that needed minor fixes.

## Chrome DevTools
All website pages have been extensively tested for mobile-first responsiveness using Chrome DevTools. I personally checked responsiveness on the following devices:
* Windows 10 laptop
* Windows 10 desktop
* Android 10 phone
* Android 10 tablet 

I asked friends to check responsiveness on:
* iMac - MacOS 10.15
* iPad - iPadOS 13.5
* iPhone - iOS 13.5

## Responsiveness Issues

* **Carousel** - The varying sizes of the images used in the slideshow were causing the other elements to jump around to accomodate them. I considered using a standard image size to eliminate this but was able to fix the issue with a combination of HTML and CSS positioning and justifying commands.
* **Youtube Embed** - The video embed on the homepage was displaying poorly on smaller viewports, usually sitting halfway off the screen. this was fixed by adjusting the width and padding settings.
* **Discography Timeline** - The vertical line broke out into columns and displayed very poorly on medium and large viewports. This was fixed by adding a blank, empty column to the right of the discography column. This served to keep the discography column from expanding too far with responsiveness.

# Deployment
 First I setup a local repository using Git. Then I setup a remote repository on Github. As I was building the project I was regularly saving my work using the Git Add functionality and tracking my changes with descriptive messages using the Git Commit functionality. I used Git Push to send to the remote repository. I was able to pick up exactly where I left off by clicking on the Gitpod button to access my workspace on the remote repository. When the project was finished I accessed the settings menu and activated GitHub Pages.
 
 The finished website is deployed and can be viewed via Github pages:
 https://menacethedenis.github.io/CI-milestone-one-OFAC_website/

# Credits
## Content
All images, music and text are copyright and used with the permission of Only Fumes & Corpses and Lockjaw Records. Except the reviews which are reproduced with permission from the authors.

Some websites I used for design inspiration and research included:
* http://epitaph.com/artists/defeater/bio
* https://www.deftones.com/
* http://www.bitchfalcon.com/
* https://www.emmaruthrundle.com/
* https://www.daughtersofficial.com/

The privacy policy was generated at:
* https://www.privacypolicygenerator.info/

## Acknowledgements
I would like to thank the tutors at the Code Institute and my mentor Spencer Barriball for their outstanding support, advice and encouragement. 

Thanks also to the Code Institute student care team for keeping me on track, checking in and always being so understanding, empathetic and helpful.
