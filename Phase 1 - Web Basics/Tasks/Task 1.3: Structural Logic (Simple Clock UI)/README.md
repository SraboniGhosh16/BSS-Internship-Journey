# Task 1.3 - Structural Logic (Simple Clock UI)

## Overview

This task was assigned as part of my BSS Software Engineering Internship.

The objective was to create a simple analog clock interface to practise the CSS coordinate system, stacking contexts and rotation points. The clock includes three animated hands of different lengths and thicknesses, positioned around a shared central pivot point.

## Task Information

- **Program:** BSS Software Engineering Internship
- **Phase:** Phase 1 - Web Basics
- **Task:** Task 1.3 - Structural Logic (Simple Clock UI)

## Live Demo

[**View the Project Website**](https://simpleclockui.netlify.app/)

## Technologies Used

- HTML5
- CSS3

## Features

- Circular clock face with a distinct border.
- Three animated clock hands with different lengths and thicknesses.
- Continuous rotation using CSS animations.
- Shared central pivot point for all three hands.
- Centre point layered above the clock hands.
- Responsive clock sizing.
- Footer disclaimer explaining that the clock is an animation demonstration rather than a functional timekeeping clock.

## Concepts Practised

- CSS positioning (`relative` and `absolute`).
- CSS coordinate system and percentage-based positioning.
- CSS transforms (`rotate()` and `translate()`).
- Transform origin (`transform-origin`).
- CSS animations using `@keyframes`.
- Animation duration, timing function and iteration count.
- Stacking order using `z-index`.
- Flexbox layout.
- Aspect ratio and responsive sizing.
- CSS pseudo-classes (`:first-child` and `:last-child`).

## Implementation Notes

The clock uses a relatively positioned container as the reference for its absolutely positioned hands. Each hand is aligned at the centre of the clock and uses `transform-origin: bottom center` to rotate around its bottom end. CSS keyframe animations provide continuous rotation, with different durations assigned to each hand. The animation speeds are intentionally different from standard clock timing, so the project does not display real time or synchronised hour, minute and second values.
