# Flat Data Demo: NASA Image of the Day

This demo is part of a larger Flat Data project created by [GitHub OCTO](https://octo.github.com/). Read more about the project [here](https://octo.github.com/blog/flat-data).

## What this demo does

This repository uses a [Flat Data Action](https://octo.github.com/blog/flat-data) to fetch a JSON file with information about [NASA's image of the day](https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY) every day at 8 am UTC. Using a postprocessing script, Flat grabs the image URL within the JSON data and downloads the image as well.

Inside `.github/workflows/flat.yaml`:
```yaml
- name: Fetch data
        uses: githubocto/flat@v2
        with:
          http_url: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY # The data to fetch every day
          downloaded_filename: data.json # The http_url gets saved and renamed in our repository as data.json
          postprocess: postprocess.ts # A postprocessing javascript or typescript file written in Deno
```

<img src="https://raw.githubusercontent.com/githubocto/flat-demo-NASA-photo-of-the-day/readme-assets/diagram2.png" alt="diagram" width="400"/>

## Postprocessing

Refer to the [Flat postprocessing library](https://github.com/githubocto/flat-postprocessing) for more helper functions and examples for writing postprocessing scripts.

## License

[MIT](LICENSE)
