import { parentPort, workerData } from 'worker_threads'

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2)

const sendResult = () => {
  try {
    parentPort.postMessage({ status: 'resolved', data: nthFibonacci(workerData) })
  } catch (err) {
    parentPort.postMessage({ status: 'error', data: null })
  }
}

sendResult();