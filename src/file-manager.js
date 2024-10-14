import { createInterface } from 'node:readline/promises'
import { homedir } from 'node:os'

import { defaultUserName, errors, exitCmd, promptSymbol } from './helpers/constants/constants.js'
import { inputHandler } from './helpers/input-handler/input-handler.js'
import { logWelcomeMessage, logCurrentPath, logGoodbyeMessage } from './helpers/loggers/loggers.js'

let currentPath = homedir()
const userName = process.env.npm_config_username ?? defaultUserName

process.chdir(currentPath)

logWelcomeMessage(userName)
logCurrentPath(currentPath)

const rl = createInterface({
  input: process.stdin, output: process.stdout, prompt: promptSymbol
})

rl.prompt()
rl
  .on('line', async (data) => {
    data.trim().startsWith(exitCmd) && rl.close()
    currentPath = await inputHandler(data.trim(), currentPath)
    logCurrentPath(currentPath)
    rl.prompt()
  })
  .on('SIGINT', () => {
    rl.write(exitCmd + '\n')
    rl.close()
  })
  .on('close', () => {
    logGoodbyeMessage(userName)
    process.exit(0)
  })
  .on('error', () => {
    throw new Error(errors.operationFailed)
  })
