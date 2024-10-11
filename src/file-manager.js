import { createInterface } from 'node:readline/promises'
import { homedir } from 'node:os'

import { logCurrentPath, messageColors, parseInput } from './helpers/index.js'
import { cd, list, up } from './utils/nwd/index.js'
import { cat } from './utils/fs/index.js'

const userName = process.env.npm_config_username ?? 'Guest'
let currentPath = homedir()

console.log(messageColors.blue, `Welcome to the File Manager, ${userName}!`)
logCurrentPath(currentPath)

const rl = createInterface({
  input: process.stdin, output: process.stdout, prompt: '> '
})

rl.prompt()

// move after
const inputHandler = async (data) => {
  const { command, argumentsArray } = parseInput(data)
  
  try {
    switch (command) {
      case '.exit':
        rl.close()
        break
      case 'up':
        currentPath = up(currentPath)
        break
      case 'cd':
        currentPath = await cd(currentPath, argumentsArray?.[ 0 ])
        break
      case 'ls':
        await list(currentPath)
        break
      case 'cat':
        await cat(argumentsArray?.[ 0 ])
        break
      default :
        console.error(`\nInvalid input\n`)
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
    rl.write('.exit')
    rl.close()
  })
  .on('close', () => {
    console.log(messageColors.blue, `\nThank you for using File Manager, ${userName}, goodbye!\n`)
    process.exit(0)
  })
  .on('error', () => {
    throw new Error(`Operation failed`)
  })
