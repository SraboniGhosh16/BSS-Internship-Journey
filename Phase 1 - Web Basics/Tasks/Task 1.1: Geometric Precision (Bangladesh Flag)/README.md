# Task 1.1 - Geometric Precision (Bangladesh Flag)

## Overview

This task was assigned as part of my BSS Software Engineering Internship.

The objective was to recreate the Bangladesh national flag using CSS positioning properties. The flag was designed with a 10:6 aspect ratio, a bottle-green background and a red circle positioned at the center of the rectangle.

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

- Bangladesh flag recreated using HTML and CSS.
- Flag maintains a 10:6 aspect ratio.
- Red circle positioned at the center of the flag.
- Responsive flag sizing based on viewport width.
- Flag centered horizontally and vertically on the page.

## Concepts Practised

- CSS positioning (`position: relative` and `position: absolute`).
- Flexbox alignment (`justify-content` and `align-items`).
- CSS transforms (`translate()`).
- Aspect ratio (`aspect-ratio`).
- Percentage-based dimensions.
- CSS `min()` function.
- CSS border radius (`border-radius: 50%`).
- Box sizing (`box-sizing: border-box`).

## Implementation Notes

The flag container uses `position: relative` to establish the positioning reference for the red circle. The circle uses `position: absolute`, with `top: 50%` and `left: 50%`, followed by `transform: translate(-50%, -50%)` to align it precisely at the center. The flag maintains its 10:6 aspect ratio, while the `min()` function limits its width to 600px or 90% of the viewport width, whichever is smaller. Flexbox is used to center the flag within the page.
