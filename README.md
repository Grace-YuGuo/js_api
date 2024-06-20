# JS_API

JS_API is a site that can check the javascript code quality by communicating with API of JSHint. It can check the API Key status(valid until date) and provide the feedback about the javascript code quality by listing the errors if applicable or showing no errors existing in your javascript code.


![Responsive Mockup](documentation/screenshots/xx.png)

## Index – Table of Contents
* [User Experience (UX)](#user-experience-ux) 
* [Features](#features)
* [Design](#design)
* [Technologies Used](#technologies-used)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)

## User Experience (UX)

-   ### User stories

    -   #### Homepage:
        1. In order to **learn about the API status** as a **user**, I can **check the status on homepage**
        2. In order to **learn about the quality of the javascript codes** as a **user**, I can **input my code**
        3. In order to **learn about the results of errors** as a **user**, I can **see the error response from API**

    -   #### Navigation:
  
    -   #### Footer:
    
    -   #### Case studies:
  
     
## Features 

### Existing Features

- __Navigation Bar__

  - Featured on all three pages (TBD)
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 

![Nav Bar](documentation/screenshots/xx.png)

- __Check status Section__

  - On the landing page the first thing the user can see checking status button.
  - The user can click the button to get the status of API key.

![Check Status Button](documentation/screenshots/xx.png)

- __Code information form input Section__ 
  - On the landing page the information input form.
  - The user can input file name or url or code which to be checking the quality.

![Code Information From input](documentation/screenshots/xx.png)

- __Footer Section__ 
  - The footer section includes copyright disclaimer information (TBD)
  - The footer is valuable to the user as it encourages them to keep connected via social media, provide us with feedback, and informs any concerned parties of our sources of information.

![Footer](documentation/screenshots/footer.png)

- __Feedback Modal__ 

  - The submit button, opens up a modal which has an results/response from API JSHint
  - This allows the user to have visibility about the quality of the code.

![feedback modal](documentation/screenshots/feedback-form.png)


### Features Left to Implement

- Resources: external links to other organizations prevent workshops
	- It would be helpful to allow users to find other useful workshops about prevent such as online courses.
- Advice section: how to talk to your potential extremist friend
	- Not every case needs police intervention. Before contacting the police it is important to assess how extreme your friend is. It may also be possible to help deradicalise them if you have the correct approach. This section would attempt to answer these issues.
- Links to sections within the page
	- If we get to a point where our website involves a lot of scrolling, it may be worthwhile adding internal links to segments of the page.
- Resources: community initiatives
	- If after viewing our website a user would like to help stop extremism, we would include links to respectable community initiatives that band together to do just that.
  
## Design

-   ### Colour Scheme
    -  We agreed that a couple dark colours mixed with bright colours would work for our website. Including red was important to convey the danger of terrorism. The colours picked were generated the website [Coolors](https://coolors.co/)

        ![Colour Palette](documentation/colour-palette/colourpalette.png)

-   ### Typography
    - Google Fonts were used to import Roboto condensed and Roboto fonts into styles.css.  These were chosen as they incorporate a lot of straight thick lines which comes across as oppressive. The fonts were tested for their effectiveness by how they made the word 'terrorism' look.
 
    ![Font Pairing](documentation/font-family/font-pair.png)   

-   ### Logo/Icon
    - The logo design incorporates a shield and binoculars. The shield because Prevent seeks to protect, and binoculars because Prevent needs to look closely to spot signs of radicalisation. The logo was generated using [bing copilot designer](https://www.bing.com/chat?q=Microsoft+Copilot&FORM=hpcodx)
 
	![Logo](assets/favicon/android-chrome-192x192.png)

-   ### Wireframes

    -   #### Khadeeja Wireframes

        ![Khadeeja wireframes](documentation/wireframes/wireframe1.png)

    -   #### Yu homepage and case studies Wireframes

        ![Yu homepage and case studies](documentation/wireframes/wireframe2.png)

    -   #### Yu resources and advice Wireframes

        ![Yu resources and advice](documentation/wireframes/wireframe3.png)

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JAVASCRIPT](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

-   [Google Fonts:](https://fonts.google.com/) was used to import the 'Roboto Condensed' and 'Roboto' fonts into the style.css file which are used on all pages of the project.
-   [Font Awesome:](https://fontawesome.com/) was used to add icons for aesthetic and UX purposes.
-   [Git:](https://git-scm.com/) was used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.
-   [GitHub:](https://github.com/) is used as the respository for the projects code after being pushed from Git.
-   [Balsamiq:](https://balsamiq.com/) was used to create the wireframes during the design process.
-   [bootstrap 5.3:](https://getbootstrap.com/) was the framework used to streamline styling classes.
-   [favicon:](https://favicon.io/) was used for creating website logo icons.
    

## Testing 


### Validator Testing 

- HTML
  - 4 errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmarkchips.github.io%2Fprevent-awareness%2Findex.html)
- CSS
  - 1 error was found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmarkchips.github.io%2Fprevent-awareness%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### Unfixed Bugs

- Page content keeps disappearing behind header on some screen sizes. This relates to the header being position: fixed. The content needs the margin to be adjusted.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab
  - Click pages on the left side
  - In the branch section, use the drop down menu to select the main branch
  - Click save, and then wait for the deployment to be generated
  - Click visit site button at top of settings

The live link can be found here - https://markchips.github.io/prevent-awareness/index.html


## Credits 

### Content 

- The layout was influenced by the following code institute projects:
	- [API_boilerplate](https://github.com/Code-Institute-Solutions/API_boilerplate)
	- [Love Rosie](https://github.com/Code-Institute-Solutions/resume-miniproject-bootstrap4/tree/master)
- The following UK government web pages were used for all factual information:
	- Case Study: https://www.gov.uk/government/publications/the-prevent-duty-safeguarding-learners-vulnerable-to-radicalisation/case-studies
 	- Prevent Officers on Home Page: https://www.met.police.uk/advice/advice-and-information/t/prevent/prevent/
  	- Prevent Terrorism on Homepage: https://www.gov.uk/government/publications/independent-review-of-prevents-report-a[…]endent-review-of-prevent-one-year-on-progress-report-accessible
  	- Prevent School on HomePage: https://www.teachingcitizenship.org.uk/wp-content/uploads/2022/08/ACT_Prevent-and-controversial-issues-guidance_guide-1.pdf
  	- Prevent Spotting the Signs: https://www.met.police.uk/advice/advice-and-information/t/prevent/prevent/
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The icons were taken from [Font Awesome](https://fontawesome.com/)
- The fonts used were imported from [Google Fonts](https://fonts.google.com/)

- Images were sourced from www.freepik.com, and taken from the following web pages:
	- https://www.freepik.com/free-photo/black-white-vehicles-yellow-caution-tape-near-car-parking-lot-daytime-crime-scene_9818237.htm#fromView=search&page=1&position=34&uuid=69e5363c-95dc-4b74-96a1-cda464b3fd90
	- https://www.freepik.com/free-vector/crime-scene-with-tape-concept-illustration_37573771.htm#fromView=search&page=1&position=7&uuid=f659683b-489f-444b-8ce9-267a93dde8c1
	- https://www.freepik.com/free-photo/wedding-bouquet-rocks_3402602.htm#fromView=search&page=1&position=0&uuid=c9b5bc51-2d3c-4268-9e6b-5040e2925bb5
	- https://www.freepik.com/free-ai-image/diverse-people-addicted-their-smart-devices-scrolling-through-looking-into-their-screens_186027476.htm#fromView=search&page=1&position=17&uuid=8515378b-b6bf-4255-95f5-2a4a3e313bdc
	- https://www.freepik.com/free-photo/top-view-blue-monday-concept-composition-with-telephone_19534931.htm