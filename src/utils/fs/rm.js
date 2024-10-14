import constants from 'node:constants'
import { access, unlink } from 'node:fs/promises'
import { resolve } from 'node:path'

import { errorHandler } from '../../helpers/error-handler/error-handler.js'

const rm = async (filePath) => {
  const resolvedPath = resolve(filePath ?? '')
  
  try {
    await access(resolvedPath, constants.F_OK)
    await unlink(resolvedPath)
  } catch (error) {
    errorHandler(error.code ?? '')
  }
}

export { rm }