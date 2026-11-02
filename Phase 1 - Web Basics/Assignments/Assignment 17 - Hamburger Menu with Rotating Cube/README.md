# Assignment 17 - Hamburger Menu with Rotating 3D Cube

## Overview

This assignment is part of my learning journey through *Modern HTML & CSS From The Beginning 2.0* during the BSS Software Engineering Internship.

The objective was to create a responsive navigation menu with a hamburger toggle for smaller screens. I extended the project by adding a rotating 3D cube, applying the CSS 3D transformation concepts covered in Module 16.

## Course Information

- **Course:** Modern HTML & CSS From The Beginning 2.0
- **Module:** Module 16
- **Assignment:** Hamburger Menu

## Live Demo

[**View the Project Website**](https://hamburger-menu-cube.vercel.app/)

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts (Poppins)
- Font Awesome

## Features

- Responsive navigation bar.
- Desktop navigation menu.
- Hamburger menu for smaller screens.
- Slide-in mobile navigation menu.
- Animated 3D cube with six faces.
- Continuous cube rotation.
- Cube visibility toggles when the mobile menu is opened or closed.

## Concepts Practised

- CSS Flexbox.
- CSS positioning.
- CSS transitions and transforms.
- CSS 3D transformations (`perspective` and `transform-style: preserve-3d`).
- CSS animations using `@keyframes`.
- CSS media queries.
- JavaScript DOM selection.
- Event listeners and `classList.toggle()`.
- Synchronising UI behaviour using JavaScript class toggling.

## Implementation Notes

The navigation menu uses CSS transforms and transitions to slide into view on smaller screens. JavaScript toggles the `active` class when the hamburger button is clicked. The 3D cube is created using six individual faces positioned with CSS 3D transformations and continuously rotated using `@keyframes`. An additional JavaScript interaction hides the cube while the mobile navigation menu is active.
