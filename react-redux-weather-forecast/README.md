![logo](https://image.ibb.co/g69ZDx/682111_cloud_512x512.png)

# 5-Day Weather Forecast
A simple application to display 5-day weather forecast using the OpenWeatherMap API. Built on top of my recently created [React-Redux-Sass Starter Kit](https://github.com/Gigacore/React-Redux-Sass-Starter).

### Demo 
https://www.gigacore.in/demos/react-weather-forecast/

## Pre-requisites 
* Node.js 6.1 and above

## How to run
* Clone it
* ```cd react-weather-forecast```
* ```npm i```
* ```npm start```
* Open ```http://localhost:8080``` to see the app.

## Build
From the root dir, run either of the following:

* ```webpack``` bundles all your updates to bundle.js and bundle.css in dist folder.
* If you insist to automate the build upon appending changes to files, use ```webpack --watch``` 

### TODOs
* Display detailed multiple forecasts across the day.
* Add an option to choose Units in either Metric or Imperial.
* Provide an option for user to choose location of their choice by Name, Lat/Long etc
* Display higher-level of weather information such as Wind Speed, Precipitation etc
* Fix lint issues and config the eslintrc to support "no-vars-used" for Imports
* Use a proper loading spinner icon on page load
* Identify and address edgecases.
* Better and more functional UI
* Revisit the code to improve performance. Such as sorting, looping, searching etc.
* Prevent fetching new data on every refresh by caching the data for a set duration of session.

### Tech Stack

* React.js
* Redux
* JavaScript (ES6)
* HTML5
* SASS


#### The MIT License (MIT)
MIT © 2018 Santhosh Sundar