import {getEnvVarValueByName} from "./args/parseArgs.js";

import * as readline from "readline";
import {printListOfFiles} from "./commands/list.js";
import {INVALID_INPUT} from "./constants/messagesToUser.js";
import {printCPUArchitecture, printCPUsInfo, printEOL, printHomeDir, printUsername} from "./commands/os.js";
import {getUpDir} from "./commands/up.js";
import {goToDir} from "./commands/cd.js";
import {cat} from "./commands/cat.js";
import {getResolvedPath} from "./utils/pathHelper.js";
import {createFile} from "./commands/add.js";
import CurrentFolder from "./utils/currentFolder.js";
import {renameFile} from "./commands/rename.js";
import {copyFile} from "./commands/copyFile.js";
import {deleteFile} from "./commands/deleteFile.js";
import {calculateHash} from "./commands/hash.js";
import {compress} from "./commands/compress.js";
import {decompress} from "./commands/decompress.js";

const username=getEnvVarValueByName("username");

console.log(`Welcome to the File Manager, ${username}!`)
console.log(`You are currently in ${CurrentFolder.get()}`);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', async (input) => {
    const [command , ...args] = input.split(" ");
    switch (command) {
        case  ".exit":
            console.log(`Thank you for using File Manager, ${username}!`)
            rl.close();
            break;
        case  "up":
            CurrentFolder.set(getUpDir());
            break;
        case  "cd":
            CurrentFolder.set(await goToDir(args[0]));
            break;
        case  "ls":
            await printListOfFiles(CurrentFolder.get());
            break;
        case  "cat":
            await cat(getResolvedPath(args[0]));
            break;
        case  "add":
            await createFile(args[0]);
            break;
        case  "rn":
             await renameFile( args[0], args[1])
            break;
        case  "cp":
           await copyFile(args[0],args[1] )
            break;
        case  "mv":
            await copyFile(args[0],args[1] ,true)
            break;
        case  "rm":
            await deleteFile(args[0]);
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
            calculateHash(args[0]);
            break;
        case  "compress":
            await compress(args[0],args[1] );
            break;
        case  "decompress":
            await decompress(args[0],args[1] );
            break;
        default:
            console.error(INVALID_INPUT);
    }
    console.log(`You are currently in ${CurrentFolder.get()}`);
});


rl.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${username}!`)
    rl.close();
});