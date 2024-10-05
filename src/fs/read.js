import fsp from "fs/promises";
import { existsSync, ReadStream } from "fs";
import path from "path";

const read = async () => {
  const toReadFilePath = path.resolve("src", "fs", "files", "fileToRemove.txt");

  if (!existsSync(toReadFilePath)) {
    throw new Error("FS operation failed");
  } else {
    const stream = new ReadStream(toReadFilePath);

    stream.on("readable", function () {
      const data = stream.read();
      if (data != null) console.log(data.toString().replace(/\n$/g, ""));
    });
  }
};

await read();