import { exec } from "child_process";
import path from "path";

const spawnChildProcess = async (args) => {
  const toExecFilePath = path.resolve("src", "cp", "files", "script.js");
  const childProcess = exec("node " + toExecFilePath + " " + args.join(" "));
  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(["someArgument1", "someArgument2", "someArgument3"]);
