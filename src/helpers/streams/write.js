import { createWriteStream } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const write = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const filePath = join(__dirname, 'files', 'fileToWrite.txt')
  
  const writeStream = createWriteStream(filePath)
  
  const handleWrite = (chunk) => {
    writeStream.write(chunk)
  }
  const handleError = () => {
    throw new Error('Operation failed')
  }
  
  process.stdin
    .on('error', handleError)
    .on('data', (chunk) => handleWrite(chunk))
    .on('error', handleError)
}

await write();