# Assignment 17 - Hamburger Menu

## Overview

This assignment is part of my learning journey through *Modern HTML & CSS From The Beginning 2.0* during the BSS Software Engineering Internship.

The objective was to create a responsive navigation menu with a hamburger toggle for smaller screens. The navigation menu displays regular links on desktop screens and a slide-in menu on smaller screens.

## Course Information

- **Course:** Modern HTML & CSS From The Beginning 2.0
- **Module:** Module 16
- **Assignment:** Hamburger Menu

## Live Demo

[**View the Project Website**](https://hamburger--menu.vercel.app/)

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts (Poppins)
- Font Awesome

## Features

- Responsive navigation bar.
- Desktop navigation menu with links.
- Hamburger menu toggle for smaller screens.
- Slide-in mobile navigation menu.
- Smooth CSS transition when opening and closing the mobile menu.
- Hover effect on navigation links.

## Concepts Practised

- CSS Flexbox.
- CSS positioning.
- CSS transitions and transforms.
- CSS media queries.
- Responsive navigation design.
- JavaScript DOM selection.
- Event listeners.
- `classList.toggle()` for managing CSS classes.
- Controlling menu visibility through JavaScript and CSS.

## Implementation Notes

The navigation bar uses CSS Flexbox to align the logo and navigation links. CSS media queries hide the desktop navigation menu and display the hamburger menu on screens with a maximum width of 768px.

The mobile navigation menu is initially positioned outside the viewport using `transform: translateX(100%)`. When the hamburger icon is clicked, JavaScript toggles the `active` class on the mobile menu. This changes its transform value to `translateX(0)`, allowing the menu to slide into view with a smooth CSS transition.
