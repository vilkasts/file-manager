import { promises } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const remove = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const filePath = join(__dirname, 'files', 'fileToRemove.txt')
  
  try {
    await promises.unlink(filePath)
  } catch {
    throw new Error('FS operation failed')
  }
}

await remove();