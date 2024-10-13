import { readFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { resolve } from 'node:path'

const hash = async (targetPath) => {
  const resolvedPath = resolve(targetPath ?? '')
  
  try {
    const hash = createHash('sha256')
    const data = await readFile(resolvedPath, { flag: 'wx' })
    const hashHex = hash.update(data).digest('hex')
    
    console.log(hashHex)
  } catch {
    console.error(`\nInvalid input\n`)
  }
  
}

export { hash }