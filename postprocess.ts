// You can test this script locally on your computer by runinng `deno run -A postprocess.ts data.json`

import { readJSON } from 'https://deno.land/x/flat@0.0.2/mod.ts'

// required: get the data filename as the first argument
const filename = Deno.args[0]
const data = await readJSON(filename) as any // cast as any so we can read any keys from JSON

// Postprocess steps
const imageURL = data.url // fetch the URL key in the json
const response = await fetch(imageURL); // fetch an image
const imageBytes = new Uint8Array(await response.arrayBuffer());
const newFileName = './nasa-image-of-the-day.jpg' // filename to save the image data
await Deno.writeFile(newFileName, imageBytes); // create a jpg file with Deno

// IMPORTANT: we have output the new filename as the last log
console.log(newFileName)
