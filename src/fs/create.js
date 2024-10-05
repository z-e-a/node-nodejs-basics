import fs from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const create = async () => {
  const filePath = path.resolve("src", "fs", "files", "fresh.txt");

  if (existsSync(filePath)) {
    throw new Error("FS operation failed");
  } else {
    fs.writeFile(filePath, "I am fresh and young");
  }
};

await create();