import { messageColors } from '../constants/constants.js'

const logCurrentPath = (dirname) => {
  console.log(messageColors.yellow, `You are currently in ${dirname}\n`)
}

export { logCurrentPath }