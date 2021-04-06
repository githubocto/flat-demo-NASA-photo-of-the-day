const filename = Deno.args[0]
const decoder = new TextDecoder('utf-8')
const encoder = new TextEncoder()
const raw = await Deno.readFile(filename)
const data = JSON.parse(decoder.decode(raw))
const newFilename = `post_${filename}`
await Deno.writeFile(newFilename, encoder.encode(JSON.stringify(data)))
console.log('I AM NOT THE FILENAME')
console.log(newFilename)
