# Task 1.1 - Geometric Precision (Bangladesh Flag)

## Overview

This task was assigned as part of my BSS Software Engineering Internship.

The objective was to recreate the Bangladesh national flag using HTML and CSS, following its prescribed proportions and geometric positioning. The flag maintains a 10:6 aspect ratio, with a circular red disc positioned at 45% of the flag's length and vertically centred.

## Task Information

- **Program:** BSS Software Engineering Internship
- **Phase:** Phase 1 - Web Basics
- **Task:** Task 1.1 - Geometric Precision

## Live Demo

[**View the Project Website**](https://bangladeshflag-sraboni.netlify.app/)

## Technologies Used

- HTML5
- CSS3

## Features

- Bangladesh national flag recreated using HTML and CSS.
- Flag maintains the prescribed 10:6 aspect ratio.
- Red circle positioned at 45% horizontally and 50% vertically.
- Circle diameter maintained at 40% of the flag's width.
- Responsive flag sizing with a maximum width of 800px.
- Flag centred horizontally and vertically on the page.

## Concepts Practised

- CSS positioning (`position: relative` and `position: absolute`).
- Flexbox alignment (`justify-content` and `align-items`).
- CSS transforms (`translate()`).
- Aspect ratio (`aspect-ratio`).
- Percentage-based dimensions and positioning.
- CSS `max-width`.
- CSS border radius (`border-radius: 50%`).
- Box sizing (`box-sizing: border-box`).

## Implementation Notes

The flag container uses a 10:6 aspect ratio and a maximum width of 800px to maintain its proportions across different screen sizes. The red circle is positioned absolutely within the flag container, using `top: 50%` and `left: 45%`. The `transform: translate(-50%, -50%)` property shifts the circle by half its own dimensions to align its centre with the specified coordinates. Flexbox is used to centre the flag on the page.
