import * as os from "os";

export const printEOL = () => {
   console.log(JSON.stringify(os.EOL));
}

export const printCPUsInfo = () => {
   console.table(os.cpus(), ["model", "speed"]);
}

export const printHomeDir = () => {
   console.log(JSON.stringify(os.homedir()));
}

export const printUsername = () => {
   console.log(os.userInfo().username);
}

export const printCPUArchitecture = () => {
   console.log(os.arch());
}