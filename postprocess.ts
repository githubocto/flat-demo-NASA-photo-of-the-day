const filename = Deno.args[0]
const decoder = new TextDecoder('utf-8')
const encoder = new TextEncoder()
const raw = await Deno.readFile(filename)
const data = JSON.parse(decoder.decode(raw))
const imageURL = data.url
const res = await fetch(imageURL);
const imageBytes = new Uint8Array(await res.arrayBuffer());
const newFileName = './nasa-image-of-the-day.jpg'
await Deno.writeFile(newFileName, imageBytes);
console.log(newFileName)
