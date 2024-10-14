import { writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'

import { errorHandler } from '../../helpers/error-handler/error-handler.js'

const add = async (currentPath, fileName) => {
  const resolvedPath = resolve(currentPath)
  const fileContent = ''
  
  try {
    const filePath = join(resolvedPath, fileName)
    
    await writeFile(filePath, fileContent, { flag: 'wx' })
  } catch (error) {
    errorHandler(error.code ?? '')
  }
}

export { add }