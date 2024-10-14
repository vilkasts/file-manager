import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'

import { errors } from '../../helpers/constants/constants.js'

const list = async (currentPath) => {
  const resolvedPath = resolve(currentPath ?? '')
  
  try {
    const filenamesArray = await readdir(resolvedPath, { withFileTypes: true })
    const filesArray = filenamesArray
      .map(dirent => {
        return { Name: dirent.name, Type: dirent.isFile() ? 'file' : 'directory' }
      })
      .toSorted((a, b) => {
        return (a.Type === 'directory' ? 0 : 1) - (b.Type === 'directory' ? 0 : 1)
      })
    
    console.table(filesArray)
  } catch {
    throw new Error(errors.operationFailed)
  }
}

export { list }