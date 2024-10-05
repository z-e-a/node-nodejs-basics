import fsp from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const copy = async () => {
  const sourceDirPath = path.resolve("src", "fs", "files");
  const destDirPath = path.resolve("src", "fs", "files_copy");

  if (!existsSync(sourceDirPath) || existsSync(destDirPath)) {
    throw new Error("FS operation failed");
  } else {
    await fsp.cp(sourceDirPath, destDirPath, { recursive: true });
  }
};

await copy();
