import { pipeline } from 'node:stream/promises'
import { access } from 'node:fs/promises'
import { createReadStream, createWriteStream } from 'node:fs'
import { extname, resolve, join, basename } from 'node:path'
import { createBrotliDecompress } from 'node:zlib'
import constants from 'node:constants'

const decompress = async (filePath, destinationPath) => {
  const resolvedFilePath = resolve(filePath ?? '')
  const resolvedTargetDirPath = resolve(destinationPath ?? '')
  const fileName = basename(resolvedFilePath)
  const extension = extname(fileName)
  const compressedFilePath = join(resolvedTargetDirPath, fileName.replace(extension, ''))
  
  try {
    await access(resolvedFilePath, constants.F_OK)
    
    const readStream = createReadStream(resolvedFilePath)
    const writeStream = createWriteStream(compressedFilePath, { flags: 'wx' })
    const brotliCompress = createBrotliDecompress()
    
    await pipeline(readStream, brotliCompress, writeStream)
  } catch {
    console.error(`\nInvalid input: File already exists or incorrect file path or destination folder path\n`)
  }
}

export { decompress }
