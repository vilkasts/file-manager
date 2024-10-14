const commands = {
  cat: 'cat',
  cp: 'cp',
  up: 'up',
  cd: 'cd',
  ls: 'ls',
  add: 'add',
  rn: 'rn',
  mv: 'mv',
  rm: 'rm',
  os: 'os',
  hash: 'hash',
  compress: 'compress',
  decompress: 'decompress'
}

const osFlags = {
  eol: '--EOL', cpus: '--cpus', homedir: '--homedir', username: '--username', architecture: '--architecture',
}

const errors = {
  invalidInput: `\nInvalid input\n`, operationFailed: 'Operation failed',
}

const messageColors = {
  blue: '\x1b[36m%s\x1b[0m', green: '\x1b[32m%s\x1b[0m', yellow: '\x1b[33m%s\x1b[0m',
}

const defaultUserName = 'Guest'
const exitCmd = '.exit'
const promptSymbol = '> '

export { commands, defaultUserName, errors, exitCmd, messageColors, promptSymbol, osFlags }