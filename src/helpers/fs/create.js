import { existsSync, promises } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const filePath = join(__dirname, 'files', 'fresh.txt')
  const fileContent = 'I am fresh and young'
  
  if (existsSync(filePath)) {
    throw new Error('FS operation failed')
  }
  
  try {
    await promises.writeFile(filePath, fileContent)
  } catch {
    throw new Error('FS operation failed')
  }
}

await create();