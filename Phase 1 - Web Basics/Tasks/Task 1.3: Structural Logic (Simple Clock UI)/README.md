# Task 1.3 - Structural Logic (Simple Clock UI)

## Overview

This task was assigned as part of my BSS Software Engineering Internship.

The objective was to create a simple animated clock interface to practise CSS positioning, rotation points, and keyframe animations. The clock features a circular face with two animated hands of different lengths and colours, rotating around a shared reference point.

## Task Information

- **Program:** BSS Software Engineering Internship
- **Phase:** Phase 1 - Web Basics
- **Task:** Task 1.3 - Structural Logic (Simple Clock UI)

## Live Demo

[**View the Project Website**](https://simple-clock-ui.vercel.app/)

## Technologies Used

- HTML5
- CSS3

## Features

- Circular clock face with a distinct border.
- Two animated hands with different lengths and colours.
- Continuous rotation using CSS keyframe animations.
- Shared positioning reference for both clock hands.
- Different animation durations for the two hands.
- Responsive clock sizing with a maximum width of 400px.

## Concepts Practised

- CSS positioning (`position: relative` and `position: absolute`).
- CSS coordinate system and percentage-based positioning.
- CSS transforms (`rotate()`).
- Transform origin (`transform-origin`).
- CSS animations using `@keyframes`.
- Animation duration and timing functions.
- Infinite animation iteration.
- Flexbox alignment.
- Aspect ratio and responsive sizing.
- CSS `min()` function.

## Implementation Notes

The clock uses a relatively positioned container as the reference for its absolutely positioned hands. Both hands are positioned at the horizontal centre and extend upwards from the bottom-centre reference point. The `transform-origin: bottom center` property ensures that they rotate around their bottom ends. A shared `@keyframes` animation controls their rotation, while different animation durations create different rotation speeds. The clock is an animation demonstration rather than a functional timekeeping clock.
