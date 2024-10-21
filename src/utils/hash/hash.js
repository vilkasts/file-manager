import { readFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { resolve } from 'node:path'

import { errorHandler } from '../../helpers/error-handler/error-handler.js'

const hash = async (targetPath) => {
  const resolvedPath = resolve(targetPath ?? '')
  
  try {
    const hash = createHash('sha256')
    const data = await readFile(resolvedPath)
    const hashHex = hash.update(data).digest('hex')
    
    console.log(hashHex)
  } catch (error) {
    errorHandler(error.code ?? '')
  }
}

export { hash }