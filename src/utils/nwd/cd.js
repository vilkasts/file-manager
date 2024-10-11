import { access } from 'node:fs/promises'
import { resolve } from 'node:path'

const cd = async (targetPath) => {
  const resolvedPath = resolve(targetPath)
  const currentPath = process.cwd()
  
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