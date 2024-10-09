import { createReadStream, createWriteStream } from 'fs'
import { createUnzip } from 'zlib'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const decompress = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const compressedFilePath = join(__dirname, 'files', 'archive.gz')
  const decompressedFilePath = join(__dirname, 'files', 'fileToCompress.txt')
  
  const readStream = createReadStream(compressedFilePath)
  const writeStream = createWriteStream(decompressedFilePath)
  const compressStream = createUnzip()
  
  const handleError = () => {
    throw new Error('Operation failed')
  }
  
  readStream
    .on('error', handleError)
    .pipe(compressStream)
    .pipe(writeStream)
    .on('error', handleError)
}

await decompress();