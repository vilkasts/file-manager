import { createReadStream, createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream/promises'
import { basename, join, resolve } from 'node:path'

const cp = async (filePath, targetDirPath) => {
  const resolvedFilePath = resolve(filePath ?? '')
  const resolvedTargetDirPath = resolve(targetDirPath ?? '')
  const newFilePath = join(resolvedTargetDirPath, basename(resolvedFilePath))
  
  const readStream = createReadStream(resolvedFilePath)
  const writeStream = createWriteStream(newFilePath, { flags: 'wx' })
  
  try {
    await pipeline(readStream, writeStream)
  } catch (error) {
    console.error(`\nInvalid input: File already exists or incorrect file path or destination folder path\n`)
  }
}

export { cp }