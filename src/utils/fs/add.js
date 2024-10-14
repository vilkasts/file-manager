import { writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'

import { messageColors } from '../../helpers/constants/constants.js'

const add = async (currentPath, fileName) => {
  const resolvedPath = resolve(currentPath)
  const fileContent = ''
  
  try {
    const filePath = join(resolvedPath, fileName)
    
    await writeFile(filePath, fileContent, { flag: 'wx' })
  } catch {
    console.error(messageColors.red, `\nInvalid input: Please try another file name\n`)
  }
}

export { add }