import { access } from 'node:fs/promises'
import { resolve } from 'node:path'

const cd = async (currentPath, targetPath) => {
  const resolvedPath = resolve(targetPath ?? currentPath)
  
  try {
    await access(resolvedPath)
    process.chdir(resolvedPath)
    
    return resolvedPath
  } catch {
    console.error(`Incorrect path: "${resolvedPath}", please try a different one`)
  }
  
  return currentPath
}

export { cd }