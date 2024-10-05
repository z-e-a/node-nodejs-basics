import fsp from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const rename = async () => {
  const sourceFilePath = path.resolve("src", "fs", "files", "wrongFilename.txt");
  const destFilePath = path.resolve("src", "fs", "files", "properFilename.md");

  if (!existsSync(sourceFilePath) || existsSync(destFilePath)) {
    throw new Error("FS operation failed");
  } else {
    await fsp.rename(sourceFilePath, destFilePath);
  }
};

await rename();