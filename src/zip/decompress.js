import { ReadStream, WriteStream } from "fs";
import { pipeline } from "stream/promises";
import path from "path";
import zlib from "zlib";

const decompress = async () => {
  const toReadFilePath = path.resolve("src", "zip", "files", "archive.gz");
  const readStream = new ReadStream(toReadFilePath);
  const toWriteFilePath = path.resolve("src", "zip", "files", "fileToCompress.txt");
  const writeStream = new WriteStream(toWriteFilePath);

  await pipeline(
  readStream,
  zlib.createUnzip(),
  writeStream
  );
};

await decompress();