import * as os from "os";
import { getEnvVarValueByName} from "./args/parseArgs.js";

import * as readline from "readline";
import {printListOfFiles} from "./commands/list.js";
import {INVALID_INPUT} from "./constants/messagesToUser.js";
import {printCPUArchitecture, printCPUsInfo, printEOL, printHomeDir, printUsername} from "./commands/os.js";
import {getUpDir} from "./commands/up.js";
import {goToDir} from "./commands/cd.js";
import {cat} from "./commands/cat.js";
import {getResolvedPath} from "./utils/pathHelper.js";
import {createFile} from "./commands/add.js";

let currentFolder = os.homedir();
const username=getEnvVarValueByName("username");

console.log(`Welcome to the File Manager, ${username}!`)
console.log(`You are currently in ${currentFolder}`);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', async (input) => {
    //console.log(`Input Received: ${input}`);
    const command =  input.split(" ")[0];
    const secondArg = input.split(" ")[1];
    switch (command) {
        case  ".exit":
            console.log(`Thank you for using File Manager, ${username}!`)
            rl.close();
            break;
        case  "up":
            currentFolder = getUpDir(currentFolder);
            break;
        case  "cd":
            currentFolder =  await goToDir(currentFolder,secondArg);
            break;
        case  "ls":
            await printListOfFiles(currentFolder);
            break;
        case  "cat":
            await cat(getResolvedPath(currentFolder,secondArg));
            break;
        case  "add":
            await createFile(currentFolder,secondArg);
            break;
        case  "rn":
            //   await printListOfFiles(currentFolder); todo
            break;
        case  "cp":
            //   await printListOfFiles(currentFolder); todo
            break;
        case  "mv":
            //   await printListOfFiles(currentFolder); todo
            break;
        case  "rm":
            //   await printListOfFiles(currentFolder); todo
            break;
        case  "os --EOL":
            printEOL();
            break;
        case  "os --cpus":
            printCPUsInfo();
            break;
        case  "os --homedir":
            printHomeDir();
            break;
        case  "os --username":
            printUsername();
            break;
        case  "os --architecture":
            printCPUArchitecture();
            break;
        case  "hash":
            //   await printListOfFiles(currentFolder); todo
            break;
        case  "compress":
            //   await printListOfFiles(currentFolder); todo
            break;
        case  "decompress":
            //   await printListOfFiles(currentFolder); todo
            break;
        default:
            console.error(INVALID_INPUT);
    }
    console.log(`You are currently in ${currentFolder}`);
});


rl.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${username}!`)
    rl.close();
});