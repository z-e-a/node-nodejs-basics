import fsp from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const remove = async () => {
    const toRemoveFilePath = path.resolve("src", "fs", "files", "fileToRemove.txt");

    if (!existsSync(toRemoveFilePath)) {
      throw new Error("FS operation failed");
    } else {
      await fsp.rm(toRemoveFilePath);
    }

};

await remove();