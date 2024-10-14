import constants from 'node:constants'
import { pipeline } from 'node:stream/promises'
import { access } from 'node:fs/promises'
import { createReadStream, createWriteStream } from 'node:fs'
import { basename, join, resolve } from 'node:path'
import { createBrotliCompress } from 'node:zlib'

import { messageColors } from '../../helpers/constants/constants.js'

const compress = async (filePath, destinationPath) => {
  const resolvedFilePath = resolve(filePath ?? '')
  const resolvedTargetDirPath = resolve(destinationPath ?? '')
  const fileName = basename(resolvedFilePath)
  
  const compressedFilePath = join(resolvedTargetDirPath, `${fileName}.br`)
  
  try {
    await access(resolvedFilePath, constants.F_OK)
    
    const readStream = createReadStream(resolvedFilePath)
    const writeStream = createWriteStream(compressedFilePath, { flags: 'wx' })
    const brotliCompress = createBrotliCompress()
    
    await pipeline(readStream, brotliCompress, writeStream)
  } catch {
    console.error(messageColors.red, `\nInvalid input: File already exists or incorrect file path or destination folder path\n`)
  }
}

export { compress }
