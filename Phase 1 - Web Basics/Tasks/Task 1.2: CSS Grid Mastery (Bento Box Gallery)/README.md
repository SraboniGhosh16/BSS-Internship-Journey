# Task 1.2 - CSS Grid Mastery

## Overview

This task is part of my practical learning journey during the BSS Software Engineering Internship.

The objective was to create a Bento Box-style image gallery using CSS Grid. I also integrated Lightbox2 to allow users to view the images in an enlarged overlay when clicked.

## Task Information

- **Program:** BSS Software Engineering Internship
- **Phase:** Phase 1 - Web Basics
- **Task:** Task 1.2 - CSS Grid Mastery

## Live Demo

[**View the Project Website**](https://srabonisgallery.netlify.app)

## Technologies Used

- HTML5
- CSS3
- JavaScript
- jQuery
- Lightbox2

## Features

- Bento Box-style image gallery.
- Six images arranged in a custom grid layout.
- Different image sizes and spanning arrangements.
- Lightbox effect for viewing enlarged images.
- Image captions displayed through Lightbox2.
- Hover effect on gallery images.

## Concepts Practised

- CSS Grid layout (`display: grid`).
- `grid-template-columns` and `grid-template-rows`.
- Named grid areas using `grid-template-areas`.
- Positioning items with `grid-area`.
- Selecting grid items using `nth-child()`.
- Image sizing with `object-fit: cover`.
- CSS hover effects.
- Integrating an external JavaScript library.
- Using Lightbox2 with `data-lightbox` and `data-title` attributes.

## Implementation Notes

The gallery uses six linked images arranged through named CSS Grid areas to create a Bento Box layout. The `nth-child()` selector assigns each link to its corresponding grid area. Lightbox2 is integrated to display enlarged images with captions and navigation when a gallery image is selected.
