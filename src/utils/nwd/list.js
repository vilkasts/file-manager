import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'

import { errorHandler } from '../../helpers/error-handler/error-handler.js'

const list = async (currentPath) => {
  const resolvedPath = resolve(currentPath ?? '')
  
  try {
    const filenamesArray = await readdir(resolvedPath, { withFileTypes: true })
    const filesArray = filenamesArray
      .map(dirent => {
        return { Name: dirent.name, Type: dirent.isFile() ? 'file' : 'directory' }
      })
      .sort((a, b) => {
        return (a.Type === 'directory' ? 0 : 1) - (b.Type === 'directory' ? 0 : 1)
      })
    
    console.table(filesArray)
  } catch (error) {
    errorHandler(error.code ?? '')
  }
}

export { list }