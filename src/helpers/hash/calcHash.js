import { createReadStream } from 'fs'
import { createHash } from 'crypto'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const calculateHash = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt')
  
  const hash = createHash('sha256')
  const readStream = createReadStream(filePath)
  
  const updateHash = (chunk) => hash.update(chunk)
  const getHash = () => console.log(hash.digest('hex'))
  const handleError = () => {
    throw new Error('Operation failed')
  }
  
  readStream
    .on('error', handleError)
    .on('data', updateHash)
    .on('end', getHash)
    .on('error', handleError)
}

await calculateHash();