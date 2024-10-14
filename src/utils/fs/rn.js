import constants from 'node:constants'
import { access, rename } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'

import { errors, messageColors } from '../../helpers/constants/constants.js'
import { errorHandler } from '../../helpers/error-handler/error-handler.js'

const rn = async (filePath, newFileName) => {
  const resolvedPath = resolve(filePath ?? '')
  const currentDirPath = dirname(resolvedPath)
  const newFilePath = join(currentDirPath, newFileName ?? '')
  
  try {
    await access(newFilePath, constants.F_OK)
    console.error(messageColors.red, errors.fileExists)
  } catch {
    try {
      await rename(resolvedPath, newFilePath)
    } catch (error) {
      errorHandler(error.code ?? '')
    }
  }
}

export { rn }