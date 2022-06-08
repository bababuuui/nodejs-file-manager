import * as fs  from 'fs';
import {OPERATION_FAILED} from "../constants/messagesToUser.js";
import * as path from "path";


export const createFile = async (currentFolder, fileName) => {

    try{
        const writeStream = fs.createWriteStream(path.join(currentFolder,fileName));
        writeStream.write("", "utf8")
    }
    catch (e) {
        console.error(OPERATION_FAILED + e.message)
    }


};



