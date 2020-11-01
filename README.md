# Bootcamp Homework 03 - JavaScript: Password Generator

## My Password Generator

This is an assignment to create a password generator that allows the user to specify the password criteria.  Starter code was provided that was then modified using JavaScript.  Requirements for the password generator include a clean and polished user interface, responsive design, and validation for selected password criteria.    

### Homework Deliverables and Codebase Updates

* Updated the provided `script.js` file
* Created a `passwordChar` object with array properties for each character type that could potentially populate the password (lowercase, uppercase, numbers, and special characters)
* Created a `random` function, defined by the `Math.floor` and `Math.random` functions, that can be called to generate random characters in the password
* Updated the `generatePassword` function with the following:
    * Defined confirm variables to prompt users to select character criteria to be used in the password
    * Defined a prompt variable to allow the user to define the password length
    * Created `if/else` statement for validation that acceptable criteria was chosen to generate the password.  Created alert to communicate to user when password selection criteria has not been met.  
    * Created new `password` and `selectedChars` arrays to hold the randomly selected characters of the password
    * Added conditional statements when a specific character type selection was confirmed by the user that:
        * Randomly selects a character from the character type selected and pushes it to the `password` array
        * Uses the `concat()` method to merge the `selectedChars` and confirmed character arrays
    * Added a while statement that loops over the `selectedChars` array to populate the `password` array until the password length requirement has been satisfied
    * Used the `join()` method to convert the `password` array to a string that can be passed to the `writePassword()` function
* Created a README.md file to describe and demo the code
* Deployed the application to a live URL


### Notes on this project

Using the Bootstrap CSS Framework for this project was both fun and frustrating. My expectations regarding the difficulty level of each of my tasks were incorrect, in ways that I found surprising:
* The form on the Contact page was far easier to work with than I expected. It was a welcome relief mid-project to find something that I did not struggle to implement.
* The Bootstrap grid system was more difficult to control than I expected.  The `.container` class with it's `.row` and `.col` children seemed very straight forward and almost simple in class.  But on execution in this project, I struggled with the placement of the content on the page.  
    * The content did not align the way I expected (on both the About and Portfolio pages).
    * The content did not wrap the way I expected (again, on both the About and Portfolio pages).
    * My attempts to use additional CSS to adjust margins/aligment/floats/etc proved complicated.
    * I chose to have the Portfolio img elements display horizontally across the screen (md & lg screens) for the time being since they did not have the correct placement/spacing when trying to display them in a two column grid.  Will continue to work through this issue to find a way to display them in two columns that does not render poorly.  
* The responsive navbar elements were really fun to work with until I tried to move the page links to the right side of the screen.  This, embarrissingly, took me a long time to figure out.  In the end, I updated `.mr-auto` to `.ml-auto` and learned my lesson to google solutions earlier going forward.
* The footer was more complex than I expected. I'm still unsure of how to make it function as a sticky footer. 
* Using the [HTML validation service](https://validator.w3.org/#validate_by_input) was very helpful and led to a correction of the `.form-control` id associations on the Contact form.
* The responsiveness of the page is still a bit off (the container extends past the view at certain sizes and the text moves outside of the containers, margins and alignment are also not the best depending on the screen size).  I'm hoping more practice will help me understand how to refine this functionality. 
* Choosing color schemes is difficult and not a natural talent for me. 

## Screenshot

The following image shows the portfolio appearance and functionality:

![Portfolio About](./assets/index-demo.png)

![Portfolio Contact](./assets/contact-demo.png)

![Portfolio Page](./assets/portfolio-demo.png)


## Application URL
* [Portfolio Index](https://thorgriffs.github.io/portfolio/index.html)
* [Portfolio Contact](https://thorgriffs.github.io/portfolio/contact.html)
* [Portfolio Page](https://thorgriffs.github.io/portfolio/portfolio.html)