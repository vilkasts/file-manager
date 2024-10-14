import { errors, messageColors } from '../constants/constants.js'

const errorHandler = (errorCode) => {
  if (errorCode === 'ENOENT') {
    console.error(messageColors.red, errors.incorrectPath)
  } else if (errorCode === 'EEXIST') {
    console.error(messageColors.red, errors.fileExists)
  } else {
    console.error(messageColors.red, errors.operationFailed)
  }
}

export { errorHandler }