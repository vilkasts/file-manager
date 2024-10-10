import { createInterface } from 'node:readline/promises'
import { homedir } from 'node:os'

import { logCurrentPath, parseInput } from './helpers/index.js'
import { list } from './utils/fs/list.js'

const userName = process.env.npm_config_username ?? 'Guest'
const currentPath = homedir()

console.log(`Welcome to the File Manager, ${userName}!`)
logCurrentPath(currentPath)

const rl = createInterface({
  input: process.stdin, output: process.stdout, prompt: '> '
})

rl.prompt()

// move after
const inputHandler = async (data) => {
  const { command, argumentsArray } = parseInput(data)
  
  try {
    // remove after
    console.log('argumentsArray', argumentsArray)
    switch (command) {
      case '.exit':
        rl.close()
        break
      case 'ls':
        await list(currentPath)
        break
      default :
        console.log(`Invalid input\n`)
        break
    }
    logCurrentPath(currentPath)
    rl.prompt()
  } catch {
    throw new Error(`Operation failed`)
  }
}



rl
  .on('line', async (data) => await inputHandler(data.trim()))
  .on('SIGINT', () => {
    rl.write(".exit")
    rl.close()
  })
  .on('close', () => {
    console.log(`\nThank you for using File Manager, ${userName}, goodbye!\n`)
    process.exit(0)
  })
  .on('error', () => {
    throw new Error(`Operation failed`)
  })
