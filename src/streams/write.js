import { WriteStream } from "fs";
import path from "path";

const write = async () => {
    const toWriteFilePath = path.resolve("src", "streams", "files", "fileToWrite.txt");
    const stream = new WriteStream(toWriteFilePath);
    process.stdin.pipe(stream); 
};

await write();