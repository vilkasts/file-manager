import { readdir } from 'node:fs/promises'

const list = async (folderPath) => {
  try {
    const filesNamesArray = await readdir(folderPath, { withFileTypes: true })
    const filesArray = filesNamesArray.map(dirent => {
      return { Name: dirent.name, Type: dirent.isFile() ? 'file' : 'directory' }
    })
    console.table(filesArray)
  } catch {
    throw new Error('FS operation failed')
  }
}

export { list }