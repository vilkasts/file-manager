import { createReadStream } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const filePath = join(__dirname, 'files', 'fileToRead.txt')
  
  const readStream = createReadStream(filePath)
  
  const printData = (chunk) => {
    process.stdout.write(chunk + '\n')
  }
  const handleError = () => {
    throw new Error('Operation failed')
  }
  
  readStream
    .on('error', handleError)
    .on('data', printData)
    .on('error', handleError)
}

await read();