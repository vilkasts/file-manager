import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const filePath = join(__dirname, 'files', 'fileToRead.txt')
  
  try {
    const fileContent = await readFile(filePath, { encoding: 'utf8' })
    console.log(fileContent)
  } catch {
    throw new Error('FS operation failed')
  }
}

await read();