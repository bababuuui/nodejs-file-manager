import * as fs  from 'fs';
import {OPERATION_FAILED} from "../constants/messagesToUser.js";
import * as path from "path";
import CurrentFolder from "../utils/currentFolder.js";


export const createFile = async ( fileName) => {

    try{
        if( fileName.length===0) {
            throw new Error("File name has to be specified");
        }

        const writeStream = fs.createWriteStream(path.join(CurrentFolder.get(),fileName));
        writeStream.write("", "utf8")
    }
    catch (e) {
        console.error(OPERATION_FAILED + e.message)
    }


};



