import { existsSync, promises } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const rename = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const wrongFilenameFilePath = join(__dirname, 'files', 'wrongFilename.txt')
  const properFilenameFilePath = join(__dirname, 'files', 'properFilename.md')
  
  if (existsSync(properFilenameFilePath) || !existsSync(wrongFilenameFilePath)) {
    throw new Error('FS operation failed')
  }
  
  try {
    await promises.rename(wrongFilenameFilePath, properFilenameFilePath)
  } catch {
    throw new Error('FS operation failed')
  }
}

await rename();