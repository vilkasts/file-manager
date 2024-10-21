import constants from 'node:constants'
import { pipeline } from 'node:stream/promises'
import { access, unlink } from 'node:fs/promises'
import { createReadStream, createWriteStream } from 'node:fs'
import { basename, join, resolve } from 'node:path'

import { errorHandler } from '../../helpers/error-handler/error-handler.js'

const mv = async (filePath, targetDirPath) => {
  const resolvedFilePath = resolve(filePath ?? '')
  const resolvedTargetDirPath = resolve(targetDirPath ?? '')
  const newFilePath = join(resolvedTargetDirPath, basename(resolvedFilePath))
  
  try {
    await access(resolvedFilePath, constants.F_OK)
    
    const readStream = createReadStream(resolvedFilePath)
    const writeStream = createWriteStream(newFilePath, { flags: 'wx' })
    
    await pipeline(readStream, writeStream)
    await unlink(resolvedFilePath)
  } catch (error) {
    errorHandler(error.code ?? '')
  }
}

export { mv }