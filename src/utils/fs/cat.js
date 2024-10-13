import { createReadStream } from 'node:fs'
import { resolve } from 'node:path'

const cat = async (filePath) => {
  const resolvedPath = resolve(filePath ?? '')
  
  return new Promise((resolve) => {
    const readStream = createReadStream(resolvedPath)
    
    readStream
      .on('data', (chunk) => console.log(`\n${chunk}\n`))
      .on('end', resolve)
      .on('error', () => {
        console.error(`\nInvalid input: Please try another file path\n`)
        resolve()
      })
  })
}

export { cat }