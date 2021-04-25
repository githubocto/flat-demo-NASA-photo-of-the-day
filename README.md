# Flat Data Demo: NASA Image of the Day

This demo is part of a larger Flat Data project created by Github Research. Read more about it [here](https://octo.github.com/blog/flat-data).

## What this demo does

This repository uses a [Flat Data Action](https://octo.github.com/blog/flat-data) to fetch a JSON file with information about [NASA's image of the day](https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY) every day at 8 am UTC.

Using a postprocessing script, Flat grabs the image URL within the JSON data and downloads the image as well.

![](https://raw.githubusercontent.com/githubocto/flat-demo-NASA-photo-of-the-day/readme-assets/diagram.png)

## Postprocessing

Refer to the [Flat postprocessing library](https://github.com/githubocto/flat-postprocessing) for more helper functions and examples for writing postprocessing scripts.