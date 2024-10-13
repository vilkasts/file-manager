import { pipeline } from 'node:stream/promises'
import { access } from 'node:fs/promises'
import { createReadStream, createWriteStream } from 'node:fs'
import { basename, join, resolve } from 'node:path'
import constants from 'node:constants'

const cp = async (filePath, targetDirPath) => {
  const resolvedFilePath = resolve(filePath ?? '')
  const resolvedTargetDirPath = resolve(targetDirPath ?? '')
  const newFilePath = join(resolvedTargetDirPath, basename(resolvedFilePath))
  
  try {
    await access(resolvedFilePath, constants.F_OK);
    
    const readStream = createReadStream(resolvedFilePath)
    const writeStream = createWriteStream(newFilePath, { flags: 'wx' })
    
    await pipeline(readStream, writeStream)
  } catch {
    console.error(`\nInvalid input: File already exists or incorrect file path or destination folder path\n`)
  }
}

export { cp }