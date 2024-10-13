import { access, unlink } from 'node:fs/promises'
import { resolve } from 'node:path'
import constants from 'node:constants'

const rm = async (filePath) => {
  const resolvedPath = resolve(filePath ?? '')
  
  try {
    await access(resolvedPath, constants.F_OK)
    await unlink(resolvedPath)
  } catch {
    console.error(`\nInvalid input: File doesn't exist, please try another file path\n`)
  }
}

export { rm }