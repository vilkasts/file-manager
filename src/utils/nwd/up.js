import { dirname, parse, resolve } from 'node:path'

const up = (currentPath) => {
  const resolvedPath = resolve(currentPath)
  const parentDirPath = dirname(resolvedPath)
  const { root } = parse(resolvedPath)
  
  if (resolvedPath !== parentDirPath && resolvedPath !== root) {
    process.chdir(parentDirPath)
    return parentDirPath
  }
  
  return resolvedPath
}

export { up }