import { createReadStream } from 'node:fs'
import { resolve } from 'node:path'

import { errorHandler } from '../../helpers/error-handler/error-handler.js'

const cat = async (filePath) => {
  const resolvedPath = resolve(filePath ?? '')
  
  return new Promise((resolve) => {
    const readStream = createReadStream(resolvedPath)
    
    readStream
      .on('data', (chunk) => console.log(`\n${chunk}\n`))
      .on('end', resolve)
      .on('error', (error) => {
        errorHandler(error.code ?? '')
        resolve()
      })
  })
}

export { cat }