# Node.js basics

## Description

Several simple tasks to learn Node.js basics at course [NodeJS 2024Q3](https://rs.school/courses/nodejs)

Forked from [this repository](https://github.com/AlreadyBored/node-nodejs-basics)

Solution represents several nested folders inside `src` containing implementation of necessary functionality inside


## Check
For check simplification `package.json` includes prepared npm-scripts.  
Some scripts have predefined data (e.g. environment variables, CLI arguments). Feel free to change it during the check if necessary.

## Subtasks
Implemented several functions in dedicated files

### Basic Scope

#### File system (src/fs)

- [x] **+6** `create.js` - implemented function that creates new file `fresh.txt` with content `I am fresh and young` inside of the `files` folder (if file already exists `Error` with message `FS operation failed` must be thrown)  
**Usage:**
```bash
$ npm run fs:create
```

- [x] **+10** `copy.js` - implemented function that copies folder `files` files with all its content into folder `files_copy` at the same level (if `files` folder doesn't exists or `files_copy` has already been created `Error` with message `FS operation failed` must be thrown)  
**Usage:**
```bash
$ npm run fs:copy
```

- [x] **+10** `rename.js` - implemented function that renames file `wrongFilename.txt` to `properFilename` with extension `.md` (if there's no file `wrongFilename.txt` or `properFilename.md` already exists `Error` with message `FS operation failed` must be thrown)  
**Usage:**
```bash
$ npm run fs:rename
```

- [x] **+6** `delete.js` - implemented function that deletes file `fileToRemove.txt` (if there's no file `fileToRemove.txt` `Error` with message `FS operation failed` must be thrown)  
**Usage:**
```bash
$ npm run fs:delete
```

- [x] **+6** `list.js` - implemented function that prints all array of filenames from `files` folder into console (if `files` folder doesn't exists `Error` with message `FS operation failed` must be thrown)  
**Usage:**
```bash
$ npm run fs:list
```

- [x] **+6** `read.js` - implemented function that prints content of the `fileToRead.txt` into console (if there's no file `fileToRead.txt` `Error` with message `FS operation failed` must be thrown)  
**Usage:**
```bash
$ npm run fs:read
```

#### Command line interface(src/cli)

- [x] **+6** `env.js` implemented  function that parses environment variables with prefix `RSS_` and prints them to the console in the format `RSS_name1=value1; RSS_name2=value2`  
**Usage:**
```bash
$ npm run cli:env
```

- [x] **+6** `args.js` implemented function that parses command line arguments (given in format `--propName value --prop2Name value2`, you don't need to validate it) and prints them to the console in the format `propName is value, prop2Name is value2`  
**Usage:**
```bash
$ npm run cli:args
```

#### Modules(src/modules)

- [x] **+20** `cjsToEsm.cjs` - file renamed to `esm.mjs` and refactored for compliance ECMAScript notation  
**Usage:**
```bash
$ npm run modules
```

#### Hash (src/hash)

- [x] **+10** `calcHash.js` - implemented function that calculates SHA256 hash for file `fileToCalculateHashFor.txt` and logs it into console as `hex` using Streams API  
**Usage:**
```bash
$ npm run hash
```

#### Streams (src/streams)

- [x] **+10** `read.js` - implemented function that reads file `fileToRead.txt` content using Readable Stream and prints it's content into `process.stdout`  
**Usage:**
```bash
$ npm run streams:read
```

- [x] **+10** `write.js` - implemented function that writes `process.stdin` data into file `fileToWrite.txt` content using Writable Stream  
**Usage:**
```bash
$ npm run streams:write
```

- [x] **+10** `transform.js` - implemented function that reads data from `process.stdin`, reverses text using Transform Stream and then writes it into `process.stdout`  
**Usage:**
```bash
$ npm run streams:transform
```

#### Zlib (src/zip)

- [x] **+10** `compress.js` - implement function that compresses file `fileToCompress.txt` to `archive.gz` using `zlib` and Streams API  
**Usage:**
```bash
$ npm run zip:compress
```

- [x] **+10** `decompress.js` - implement function that decompresses `archive.gz` back to the `fileToCompress.txt` with same content as before compression using `zlib` and Streams API  
**Usage:**
```bash
$ npm run zip:decompress
```

### Advanced Scope

#### Worker Threads (src/wt)

- [x] **+10** `worker.js` - given function extended to work with data received from main thread and implemented function which sends result of the computation to the main thread
- [x] **+30** `main.js` - implemented function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file `worker.js` and sends data to those threads and receives result of the computation from them. Incremental number sended starting from `10` to each `worker`. For example: on host machine with **4** cores script creates **4** workers and sends **10** to first `worker`, **11** to second `worker`, **12** to third `worker`, **13** to fourth `worker`. After all workers will finish, function log array of results into console. The results are array of objects has two properties:
    - `status` - `'resolved'` in case of successfully received value from `worker` or `'error'` in case of error in `worker`
    - `data` - value from `worker` in case of success or `null` in case of error in worker

    The results in the array outputs in the same order that the workers were created

**Usage:**
```bash
$ npm run wt
```

#### Child Processes (src/cp)

- [x] **+10** `cp.js` - implemented function `spawnChildProcess` that receives array of arguments `args` and creates child process from file `script.js`, passing these `args` to it. This function creates IPC-channel between `stdin` and `stdout` of master process and child process:
    - [x] **+10** child process `stdin` receives input from master process `stdin`
    - [x] **+10** child process `stdout` sends data to master process `stdout`

**Usage:**
```bash
$ npm run cp
```
