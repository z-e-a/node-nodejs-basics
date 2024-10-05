import { ReadStream } from "fs";
import path from "path";
import { createHash } from "crypto";
import { StringDecoder } from "string_decoder";

const calculateHash = async () => {
  const toReadFilePath = path.resolve("src", "hash", "files", "fileToCalculateHashFor.txt");
  const stream = new ReadStream(toReadFilePath);
  stream.on("readable", function () {
    const data = stream.read();
    if (data != null) {
      console.log(createHash("sha256").update(data).digest("hex"));
    }
  });
};

await calculateHash();