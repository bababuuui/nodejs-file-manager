import fs from "fs";

export  const isPathValid = async (path) => {
    try {
        await fs.promises.access(path)
        return true;

    } catch (e) {
        return false;
    }

}

export  const isDir = async (path) => {
    try {
        const stat=  await fs.promises.lstat(path);
        return  stat.isDirectory();

    } catch (e) {
        return false;
    }

}

export  const isFile = async (path) => {
    try {
        const stat=  await fs.promises.lstat(path);
        return  stat.isFile();

    } catch (e) {
        return false;
    }

}