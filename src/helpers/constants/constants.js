const commands = {
  add: 'add',
  cat: 'cat',
  cd: 'cd',
  compress: 'compress',
  cp: 'cp',
  decompress: 'decompress',
  hash: 'hash',
  ls: 'ls',
  mv: 'mv',
  os: 'os',
  rn: 'rn',
  rm: 'rm',
  up: 'up'
}

const defaultUserName = 'Guest'

const errors = {
  fileExists: `\nOperation failed: File already exists\n`,
  incorrectFlag: `\nOperation failed: Please try another flag\n`,
  incorrectPath: `\nOperation failed: Incorrect file path or destination folder path\n`,
  invalidInput: `\nInvalid input\n`,
  operationFailed: 'Operation failed'
}

const exitCmd = '.exit'

const messageColors = {
  blue: '\x1b[36m%s\x1b[0m', red: '\x1b[31m%s\x1b[0m', yellow: '\x1b[33m%s\x1b[0m',
}

const osFlags = {
  architecture: '--architecture', cpus: '--cpus', eol: '--EOL', homedir: '--homedir', username: '--username',
}

const promptSymbol = '> '

export { commands, defaultUserName, errors, exitCmd, messageColors, osFlags, promptSymbol }