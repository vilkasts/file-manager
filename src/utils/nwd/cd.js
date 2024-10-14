import { access } from 'node:fs/promises'
import { resolve } from 'node:path'

import { messageColors } from '../../helpers/constants/constants.js'

const cd = async (currentPath, targetPath) => {
  const resolvedPath = resolve(targetPath ?? currentPath)
  
  try {
    await access(resolvedPath)
    process.chdir(resolvedPath)
    
    return resolvedPath
  } catch {
    console.error(messageColors.red, `\nInvalid input: Please try another directory path\n`)
  }
  
  return currentPath
}

export { cd }