import { access, rename } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import constants from 'node:constants'

const rn = async (filePath, newFileName) => {
  const resolvedPath = resolve(filePath ?? '')
  const currentDirPath = dirname(resolvedPath)
  const newFilePath = join(currentDirPath, newFileName ?? '')
  
  try {
    await access(newFilePath, constants.F_OK)
    console.error(`\nInvalid input: File with the same name already exists\n`)
  } catch {
    try {
      await rename(resolvedPath, newFilePath)
    } catch (error) {
      console.error(`\nInvalid input: Please try another file path\n`)
    }
  }
}

export { rn }