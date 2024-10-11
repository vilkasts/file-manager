import { dirname, parse } from 'node:path'

const up = (currentPath) => {
  const parentDirPath = dirname(currentPath)
  const { root } = parse(currentPath)
  
  if (currentPath !== parentDirPath && currentPath !== root) {
    process.chdir(parentDirPath)
    return parentDirPath
  }
  
  return currentPath
}

export { up }