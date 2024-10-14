import { messageColors } from '../constants/constants.js'

const logCurrentPath = (dirname) => {
  console.log(messageColors.yellow, `You are currently in ${dirname}\n`)
}

const logWelcomeMessage = (userName) => {
  console.log(messageColors.blue, `Welcome to the File Manager, ${userName}!`)
}

const logGoodbyeMessage = (userName) => {
  console.log(messageColors.blue, `Thank you for using File Manager, ${userName}, goodbye!\n`)
}


export { logCurrentPath, logGoodbyeMessage, logWelcomeMessage }