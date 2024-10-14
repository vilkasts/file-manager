import { arch, cpus, EOL, homedir, userInfo } from 'node:os'

import { osFlags } from '../../helpers/constants/constants.js'

const os = (argument) => {
  switch (argument) {
    case osFlags.eol:
      console.log(JSON.stringify(EOL))
      break
    case osFlags.cpus:
      console.log(`CPUS quantity: ${cpus().length}`)
      cpus().map((cpu, index) => {
        console.log(`CPU ${index + 1}: ${cpu.model}, ${cpu.speed / 1000} GHz`)
      })
      break
    case osFlags.homedir:
      console.log(homedir())
      break
    case osFlags.username:
      console.log(userInfo().username)
      break
    case osFlags.architecture:
      console.log(arch())
      break
    default:
      console.error('Invalid input: Please try another flag')
  }
}

export { os }