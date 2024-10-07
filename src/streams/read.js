import { ReadStream } from "fs";
import path from "path";

const read = async () => {
    const toReadFilePath = path.resolve("src", "streams", "files", "fileToRead.txt");
    const stream = new ReadStream(toReadFilePath);
    stream.pipe(process.stdout); 
};

await read();