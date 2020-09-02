# Denis Lymer Milestone Project 2 - Movie Recommendation Website
My idea for my Milestone 2 project came from an almost throwaway comment from my girlfriend. While trying to select something for us to watch that evening, she had spent 20 minutes just browsing the options avaialble on Netflix and Amazon Prime.
"It's so hard to know if any of these will be good or not" she said. I immediately thought how right she was and how even the recommendations these sites supply based on your previous viewing history often turned out to be terrible.
We usually ended up checking reviews across multiple sites and publishers, which were often contradictory, before we settled on something, a time-consuming process in itself. 
It occured to me that one single, no-frills search engine that pulls back review scores from respected sites like ImDB, Rotten Tomatoes etc would be really useful, especially considering how much time we are all spending on our couches during this pandemic.

## Link to the website

https://menacethedenis.github.io/CI-milestone-one-OFAC_website/

## Link to the github repository

https://github.com/menacethedenis/CI-milestone-one-OFAC_website

# UX

I wanted to design and create a website that would be useful for fans of the band in terms of ease of access to music, videos, information and merchandise in a clean, stylish layout. And also useful for the band themselves in terms of presenting aspects and products they may want to focus on, and making themselves accessible and contactable.

### **User Stories**

Putting myself in the shoes of both website visitors and the band I created the following user stories:
* As a visitor I want to be able to easily access important information about the band
* As a visitor I want to be able to stream audio and video of the bands music by clicking on links and embeds
* As a visitor I want to be able to contact the band by clicking on a form
* As a visitor I want to be able to download the band's music by clicking a link
* As a visitor I want to be able to view and purchase the band's merchandise from the website
* As a band member I want to be able to present important information prominently
* As a band member I want to be able to receive messages from fans or booking agents 

### **Wire frames**

Using the Balsamiq desktop app I created the following wireframes as a guideline for my page designs, focusing on mobile first design and then a general desktop layout. Before drawing these up I looked at many websites of some of my favourite bands and made notes of features, layouts and presentations I admired.

Index/Home page
 
 <img src="assets/wireframes/index - mobile.PNG" width=200>

Music page
 
 <img src="assets/wireframes/music - mobile.PNG" width=200>

Bio page
 
 <img src="assets/wireframes/bio - mobile.PNG" width=200>

Store page
 
 <img src="assets/wireframes/store - mobile.PNG" width=200>

General desktop layout
 
 <img src="assets/wireframes/desktop.PNG" width=200>

# Features

## Existing Features

### **General**

* Feature 1: Cookies warning - In line with the recent focus on GDPR and the fact that almost every website you visit flashes a cookies warning nowadays, I decided to include one on the top of the home page. It links to a real privacy policy which I generated online.
* Feature 2: Navbar burger icon - This is positioned in the top-right of all pages and toggles a vertical list open and closed. I experimented with leaving it open and displaying horizontally at larger viewports but decided to implement a larger menu bar further down the page instead.
* Feature 3: Menu bar: On larger viewports a horizontal menu bar appears for ease of access to the different website pages. There are hover transition and colour effects on the items and Font Awesome icons for each.
* Feature 4: Band logo transition - The main band logo has a fade-in transition.
* Feature 5: Contact form - The left section of the footer contains a contact button which opens a modal.
* Feature 6: Social Media links - The middle section of the footer contains Font Awesome icons with working links to the real band Facebook and Twitter accounts, and to the band hashtag on Youtube and Instagram. There is a colour change hover effect on the icons.
* Feature 7: Stream Music links - The right section of the footer contains Font Awesome icons with working links to the band's music on Spotify, Apple Music, Bandcamp and SoundCloud. There is a colour change hover effect on the icons.

### **Home page**

* Feature 8: Carousel - The home page displays a carousel slideshow which automatically transitions images every 5 seconds. There are also direction control buttons to transition the images. On smaller viewports the carousel is hidden by a CSS Media Query as I felt it was unnecessary and cluttering the screen.
* Feature 9: Video - Beneath the carousel there is a youtube embed of the most recent of the band's releases.

### **Music page**

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
