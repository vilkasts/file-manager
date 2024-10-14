import { commands, errors } from '../constants/constants.js'
import { cd, list, up } from '../../utils/nwd/index.js'
import { add, cat, cp, mv, rm, rn } from '../../utils/fs/index.js'
import { os } from '../../utils/os/index.js'
import { hash } from '../../utils/hash/index.js'
import { compress, decompress } from '../../utils/archive/index.js'

const inputHandler = async (data, currentPath) => {
  const [command, ...argumentsArray] = data.trim().split(/\s+/)
  let updatedPath = currentPath
  
  try {
    switch (command) {
      case commands.up:
        updatedPath = up(currentPath)
        break
      case commands.cd:
        updatedPath = await cd(currentPath, argumentsArray?.[0])
        break
      case commands.ls:
        await list(currentPath)
        break
      case commands.cat:
        await cat(argumentsArray?.[0])
        break
      case commands.add:
        await add(currentPath, argumentsArray?.[0])
        break
      case commands.rn:
        await rn(argumentsArray?.[0], argumentsArray?.[1])
        break
      case commands.cp:
        await cp(argumentsArray?.[0], argumentsArray?.[1])
        break
      case commands.mv:
        await mv(argumentsArray?.[0], argumentsArray?.[1])
        break
      case commands.rm:
        await rm(argumentsArray?.[0])
        break
      case commands.os:
        os(argumentsArray?.[0])
        break
      case commands.hash:
        await hash(argumentsArray?.[0])
        break
      case commands.compress:
        await compress(argumentsArray?.[0], argumentsArray?.[1])
        break
      case commands.decompress:
        await decompress(argumentsArray?.[0], argumentsArray?.[1])
        break
      default :
        console.error(errors.invalidInput)
        break
    }
  } catch {
    throw new Error(errors.operationFailed)
  }
  return updatedPath
}

export { inputHandler }