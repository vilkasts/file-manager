import { EOL, homedir, userInfo, arch, cpus } from 'node:os'

const os = (argument) => {
  switch (argument) {
    case '--EOL':
      console.log(JSON.stringify(EOL))
      break
    case '--cpus':
      console.log(`CPUS quantity: ${cpus().length}`)
      cpus().map((cpu, index) => {
        console.log(`CPU ${index + 1}: ${cpu.model}, ${cpu.speed / 1000} GHz`)
      })
      break
    case '--homedir':
      console.log(homedir())
      break
    case '--username':
      console.log(userInfo().username)
      break
    case '--architecture':
      console.log(arch())
      break
    default:
      console.error('Invalid input: Please try another flag')
  }
}

export { os }