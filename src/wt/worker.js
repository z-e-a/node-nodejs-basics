import { workerData, parentPort } from "worker_threads"

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread

    // Uncomment next sentence to test error handling
    // if(workerData == 15) {
    //     throw new Error("Test error");
    // }

    const data = nthFibonacci(workerData)
    parentPort.postMessage({ data })
};

sendResult();