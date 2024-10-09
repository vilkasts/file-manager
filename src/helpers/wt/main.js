import os from 'os'
import { Worker } from 'worker_threads'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const performCalculations = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const workerPath = join(__dirname, 'worker.js')
  
  const coresQty = os.cpus().length
  const workersArray = []
  
  const createWorker = async (number) => {
    return new Promise((resolve) => {
      const worker = new Worker(workerPath, { workerData: number })
      
      worker
        .on('message', (result) => {
          resolve({ status: result.status, data: result.data })
        })
        .on('error', () => {
          resolve({ status: 'error', data: null })
        })
    })
  }
  
  for (let i = 0; i < coresQty; i++) {
    workersArray.push(createWorker(10 + i))
  }
  
  const results = await Promise.all(workersArray)
  
  console.log(results)
}

await performCalculations();