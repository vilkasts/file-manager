import { spawn } from 'child_process'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const spawnChildProcess = async (args) => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const filePath = join(__dirname, 'files', 'script.js')
  
  const childProcess = spawn('node', [filePath, ...args], {
    stdio: ['pipe', 'pipe', 'inherit'],
  })
  
  const handleError = () => {
    throw new Error('Operation failed')
  }
  
  process.stdin
    .on('error', handleError)
    .pipe(childProcess.stdin)
    .on('error', handleError)
  
  childProcess.stdout
    .on('error', handleError)
    .pipe(process.stdout)
    .on('error', handleError)
}

await spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
