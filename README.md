# Who said "WOOF"?

Visit the deployed site: [Who said "WOOF"?](https://liscannor.github.io/who-said-woof-quiz/)

## Goal for this Project

Welcome to the Who said "WOOF" Quiz website. The goal of the project is to check knowledge how well you know the breeds of dogs, get fun and interactive quiz with images, audio and visual effects to online users.  

![Responsive Displays](assets/documentation/Who-said-WOOF.png)

## CONTENTS

- [Masters Golf Quiz](#masters-golf-quiz)
- [Goal for this Project](#goal-for-this-project)
- [Table of Contents](#table-of-contents)
- [UX](#ux)
  - [User Stories](#user-stories)
  - [Design](#design)
    - [Fonts](#fonts)
    - [Icons](#icons)
    - [Colours](#colours)
    - [Imagery](#imagery)
    - [Wireframes](#wireframes)
    - [Features](#features)


    ## UX

## User Stories

* As a user, I want the quiz to be responsive to my devices.

* As a user, I want clear instructions how to play quiz.

* As a user, I want to easily navigate through quiz.

* As a user, I want to know my score during quiz.

* As a user,  I want to know my final score with some feedback.

* As a user,  I want to have music on the site.

* As a user,  I want to nhave ability to switch music on and of.

* As a user,  I want positive feedback after the game is over.

- - - 

## Design

### Fonts

I have used [Google Fonts](https://fonts.google.com/ "Google Fonts") to find a text that best suits the feel of the website. For the main text I have chosen [Ubuntu](https://fonts.google.com/specimen/Ubuntu?preview=&query=ubuntu) as I feel it is has a understandable, simple and easy to read look.

### Icons

I have used icons for my website from the [Font Awesome library](https://fontawesome.com/ "Font Awesome"). These iclude the icons to give the user the option to mute and unmute the quiz sounds. 

### Colours

I have used this colour scheme: 
![Colour Pallet](assets/documentation/woof-coolors.png)

### Imagery

As the website is called Who said "WOOF", I wanted to use an image for the page background that was associated with the theme of dogs.

### Wireframes

Wireframes were created for mobile and desktop screens using figma.

![Mobile screen](assets/documentation/mobile-frame.png)
![Desktop screen](assets/documentation/desktop-frame.png)

### Features

This website is SPA (Single Page Application)  that includes: welcome screen, game screen and result screens.

All screens on the website are responsive. Page has a favicon in the browser and the title of the site at the top of pagetab.

  ![favicon](assets/documentation/favicon.png)

  #### The Welcome screen 

  ![screenshot of welcome screen](assets/documentation/welcome-scr.png)  
   
   The Welcome screen represent a box with game instructions, an input for entering a username, a "strat quiz" button, a box with user's score and a button for on/off music.

  #### The Game screen 

  ![screenshot of game screen](assets/documentation/game-scr.png) 

  The Game screen represent: image - questions, the box with answers, a "next" button, the box with user's score and the button for on/off music.

  #### The Result screen 

  ![screenshot of result screen](assets/documentation/result-scr.png) 

  The Result screen represent: the result box with user's name and score, a "Play Again" button, an "Exit" button, the box with user's score and the button for on/off music.

  #### Future Implementations

  In future implementations I would like to: 
  - allow the user to go through different levels of difficulty.
  - consider not only the number of correct answers, but also the speed at which the user completes the quiz.

- - -

## Testing


### Solved Bugs

| No | Bug | How I solved the issue |
| :--- | :--- | :--- |
| 1 | Answers duplication for questions | Correct answer for question removed from list of possible answers before picking 3 wrong answersdesktopd. |
| 2 | "undefined" in one of the answer for second question | Answers array was not properly cloned from possible answers array, so when current answer was removed it was reduced original array and in the end there was no available answers in the array. Solved with proper array cloning. |

