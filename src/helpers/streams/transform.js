import { Transform } from 'stream'

const transform = async () => {
  const reverseStream = new Transform({
    transform (chunk, utf8, callback) {
      callback(null, chunk.toString().split('').reverse().join(''))
    }
  })
  
  const handleError = () => {
    throw new Error('Operation failed')
  }
  
  process.stdin
    .on('error', handleError)
    .pipe(reverseStream)
    .pipe(process.stdout)
    .on('error', handleError)
}

await transform();