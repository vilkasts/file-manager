import constants from 'node:constants'
import { pipeline } from 'node:stream/promises'
import { access } from 'node:fs/promises'
import { createReadStream, createWriteStream } from 'node:fs'
import { basename, extname, join, resolve } from 'node:path'
import { createBrotliDecompress } from 'node:zlib'

import { errorHandler } from '../../helpers/error-handler/error-handler.js'

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
  } catch (error) {
    errorHandler(error.code ?? '')
    
  }
}

export { decompress }
