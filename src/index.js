import * as os from "os";
import { getEnvVarValueByName} from "./args/parseArgs.js";

import * as readline from "readline";
import {printListOfFiles} from "./commands/list.js";
import {INVALID_INPUT} from "./constants/messagesToUser.js";
import {printCPUArchitecture, printCPUsInfo, printEOL, printHomeDir, printUsername} from "./commands/os.js";

let currentFolder = os.homedir();
const username=getEnvVarValueByName("username");

console.log(`Welcome to the File Manager, ${username}!`)
console.log(`You are currently in ${currentFolder}`);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', async (input) => {
    console.log(`Input Received: ${input}`);
    switch (input) {
        case  ".exit":
            console.log(`Thank you for using File Manager, ${username}!`)
            rl.close();
            break;
        case  "up":
           // await printListOfFiles(currentFolder); todo
            break;
        case  "cd":
         //   await printListOfFiles(currentFolder); todo
            break;
        case  "ls":
            await printListOfFiles(currentFolder);
            break;
        case  "cat":
            //   await printListOfFiles(currentFolder); todo
            break;
        case  "add":
            //   await printListOfFiles(currentFolder); todo
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
});


rl.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${username}!`)
    rl.close();
});