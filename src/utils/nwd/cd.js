import { access } from 'node:fs/promises'
import { resolve } from 'node:path'

import { errorHandler } from '../../helpers/error-handler/error-handler.js'

const cd = async (currentPath, targetPath) => {
  const resolvedPath = resolve(targetPath ?? currentPath)
  
  try {
    await access(resolvedPath)
    process.chdir(resolvedPath)
    
    return resolvedPath
  } catch (error) {
    errorHandler(error.code ?? '')
  }
  
  return currentPath
}

export { cd }