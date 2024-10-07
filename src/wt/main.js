import os from "os";
import { Worker } from "node:worker_threads";

const WORKER_SOURCE_PATH = "./src/wt/worker.js";

const performCalculations = async () => {
    const workers = [];

    for (let i = 0; i < os.cpus().length; i++) {
        workers.push(createWorker(10 + i))
    }

    Promise.allSettled(workers).then((results) => {
        console.log(results.map((result) => {
            if (result.status == "fulfilled") {
                return {
                    status: "resolved",
                    data: result.value.data
                }
            } else {
                return {
                    status: "error",
                    data: null
                }
            }
        }));
    })
};

function createWorker(workerData) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(WORKER_SOURCE_PATH, { workerData });
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      })
    })
  }

await performCalculations();