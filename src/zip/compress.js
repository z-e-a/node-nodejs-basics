import { ReadStream, WriteStream } from "fs";
import { pipeline } from "stream/promises";
import path from "path";
import zlib from "zlib";

const compress = async () => {
  const toReadFilePath = path.resolve("src", "zip", "files", "fileToCompress.txt");
  const readStream = new ReadStream(toReadFilePath);
  const toWriteFilePath = path.resolve("src", "zip", "files", "archive.gz");
  const writeStream = new WriteStream(toWriteFilePath);

  await pipeline(
  readStream,
    zlib.createGzip(),
  writeStream
  );
};

await compress();