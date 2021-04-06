const filename = Deno.args[0]
const decoder = new TextDecoder('utf-8')
const encoder = new TextEncoder()
const raw = await Deno.readFile(filename)
const data = JSON.parse(decoder.decode(raw))
console.log(data)
const imageURL = data.url
const res = await fetch(imageURL);
console.log(res)
const imageBytes = new Uint8Array(await res.arrayBuffer());
console.log(imageBytes)
const newFileName = './nasa-image-of-the-day.jpg'
await Deno.writeFile(newFileName, imageBytes);
console.log(newFileName)
