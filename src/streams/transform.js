import { ReadStream, WriteStream} from "fs";
import { pipeline } from "stream/promises";
import path from "path";

const transform = async () => {
    const reverser = async function* (data) {
        data.setEncoding('utf8');
        for await (const chunk of data) {
            yield chunk.split("").reverse().join("");
        }
    };

    await pipeline(
        process.stdin,
        reverser,
        process.stdout,
        { signal: (new AbortController()).signal}
    );    
};

await transform();