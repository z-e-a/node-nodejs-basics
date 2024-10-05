import fsp from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const list = async () => {
  const dirPath = path.resolve("src", "fs", "files");

  if (!existsSync(dirPath)) {
    throw new Error("FS operation failed");
  } else {
    fsp.readdir(dirPath).then((files) => {
        files.forEach(file => {
            console.log(file);
        });
    })
  }
};

await list();