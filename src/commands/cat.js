import * as fs  from 'fs';
import {OPERATION_FAILED} from "../constants/messagesToUser.js";


export const cat = async (pathToFile) => {
    try{
        const readableStream = fs.createReadStream(pathToFile, {encoding: "utf8"});
        for await (const chunk of readableStream) {
            process.stdout.write(chunk);
        }
    }
    catch (e) {
        console.error(OPERATION_FAILED)
    }


};



