# Celebrity Likeness

A full-stack application that leverages the Clarifai API and their trained celebrity AI model to determine which celebrity the user's image most closely resembles.

[API repo](https://github.com/DZRana/celebrity-likeness-api)

## Live Demo

https://dzrana.github.io/celebrity-likeness/

#### Sample:

![Celebrity Likeness Demo](demo/c-l_demo.gif)

## Purpose

#### Overview:

This project was meant to help me familiarize myself with the back-end portion of full-stack development, as well as expand on my knowledge of the front-end portion and React, itself. From experimenting with routing on the front-end to creating my own API and database on the back-end, this was my first endeavor into building out a complete web app.

#### Challenges:

Starting with the front-end, I knew I would need different pages for Sign in, Registration, and the main app. From my previous experience with conditional rendering, my solution was to use state basically as a switch to conditionally render the pages I wanted to show. After laying these out, it led to my implementation of the back-end.

Being my first time building out a back-end, I did some research and decided to go with the `Node.js` framework, `Express`, for creating my API and querying my database. Outside of the growing pains from learning the ins and outs of the framework (routes, controllers, etc.), I needed to create and test endpoints for the server portion before doing anything meaningful with them. I chose to use `Postman` for this as I found from my previous projects that it was a quick and easy way to test APIs, as well as `nodemon` to monitor the changes. I ran into a couple of problems during this process: security on Sign in and Registration and CORS when trying to hook everything up to my front-end.

For Registration, I was initially going to store their credentials as is, but I was unsure if that was the way to go. After some research, I chose `bcrypt` to hash their passwords when stored on my database as well as form validation for both Sign in and Registration. I went with `Postgres` for my database as I've had previous experiences with relational databases (`MySQL`).

For CORS, I was getting the "No Access-Control-Allow-Origin header is present" error when trying to call my endpoints from the front-end. I found that this was due to the "same-origin policy" blocking my requests. The `cors` module helped to resolve this.

#### Conclusion:

I ended up hosting the front-end on `GitHub Pages` just like my other projects and `Heroku` to host my `node` server and `Postgres` database. This was a project with a lot of trial and error. From building out a back-end for the first time, to hooking everything up (including the hosting on `Heroku`), this project helped me better understand all the moving parts of a full-stack application and how they're all woven together.
