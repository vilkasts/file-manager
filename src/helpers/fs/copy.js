import { existsSync, promises } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const copy = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const folderSourcePath = join(__dirname, 'files')
  const folderDestinationPath = join(__dirname, 'files_copy')
  
  if (existsSync(folderDestinationPath) || !existsSync(folderSourcePath)) {
    throw new Error('FS operation failed')
  }
  
  try {
    const filesNamesArray = await promises.readdir(folderSourcePath)
    
    await promises.mkdir(folderDestinationPath, { recursive: true })
    
    filesNamesArray.map(async (fileName) => {
      const fileSourcePath = join(folderSourcePath, fileName)
      const fileDestinationPath = join(folderDestinationPath, fileName)
      
      await promises.copyFile(fileSourcePath, fileDestinationPath)
    })
  } catch {
    throw new Error('FS operation failed')
  }
}

await copy();
