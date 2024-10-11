import { readdir } from 'node:fs/promises'

const list = async (currentPath) => {
  try {
    const filenamesArray = await readdir(currentPath, { withFileTypes: true })
    const filesArray = filenamesArray
      .map(dirent => {
        return { Name: dirent.name, Type: dirent.isFile() ? 'file' : 'directory' }
      })
      .toSorted((a, b) => {
        return (a.Type === 'directory' ? 0 : 1) - (b.Type === 'directory' ? 0 : 1)
      })
    
    console.table(filesArray)
  } catch {
    throw new Error('Operation failed')
  }
}

export { list }