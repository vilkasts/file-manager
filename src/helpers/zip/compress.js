import { createReadStream, createWriteStream } from 'fs'
import { createGzip } from 'zlib'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const compress = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const initialFilePath = join(__dirname, 'files', 'fileToCompress.txt')
  const compressedFilePath = join(__dirname, 'files', 'archive.gz')
  
  const readStream = createReadStream(initialFilePath)
  const writeStream = createWriteStream(compressedFilePath)
  const compressStream = createGzip()
  
  const handleError = () => {
    throw new Error('Operation failed')
  }
  
  readStream
    .on('error', handleError)
    .pipe(compressStream)
    .pipe(writeStream)
    .on('error', handleError)
}

await compress();