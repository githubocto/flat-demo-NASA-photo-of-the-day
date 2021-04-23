// You can test this script locally on your computer by runinng `deno run -A --unstable postprocess.ts data.json`
import { readJSON, readImageFromURL, writeImage } from 'https://deno.land/x/flat@0.0.9/mod.ts'

// Get the data filename as the first argument
const filename = Deno.args[0]
const data = await readJSON(filename)
const imageURL = data.url // fetch the URL key in the json

// Postprocess steps

// Case 1 it is a normal image
if (!imageURL.startsWith('https://www.youtube.com')) {
    const image = await readImageFromURL(imageURL) // fetch the image
    await writeImage(image.bytes, './', 'nasa-image-of-the-day.jpg') // create a jpg file
} 
// Case 2 it is a link to youtube
else { 
    console.log("Today has no image, but a link to youtube: ", imageURL)
}
