import constants from 'node:constants'
import { access, unlink } from 'node:fs/promises'
import { resolve } from 'node:path'

import { messageColors } from '../../helpers/constants/constants.js'

const rm = async (filePath) => {
  const resolvedPath = resolve(filePath ?? '')
  
  try {
    await access(resolvedPath, constants.F_OK)
    await unlink(resolvedPath)
  } catch {
    console.error(messageColors.red, `\nInvalid input: File doesn't exist, please try another file path\n`)
  }
}

export { rm }