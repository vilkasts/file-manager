import constants from 'node:constants'
import { access, rename } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'

import { messageColors } from '../../helpers/constants/constants.js'

const rn = async (filePath, newFileName) => {
  const resolvedPath = resolve(filePath ?? '')
  const currentDirPath = dirname(resolvedPath)
  const newFilePath = join(currentDirPath, newFileName ?? '')
  
  try {
    await access(newFilePath, constants.F_OK)
    console.error(messageColors.red, `\nInvalid input: File with the same name already exists\n`)
  } catch {
    try {
      await rename(resolvedPath, newFilePath)
    } catch (error) {
      console.error(messageColors.red, `\nInvalid input: Please try another file path\n`)
    }
  }
}

export { rn }