import * as fs from 'fs';
import {OPERATION_FAILED} from "../constants/messagesToUser.js";
import {getResolvedPath} from "../utils/pathHelper.js";

export const deleteFile = async ( pathToFile) => {
    try{
        await fs.promises.rm( getResolvedPath(pathToFile));
        console.log( "File deleted");
    }
    catch (e) {
        console.error(`${OPERATION_FAILED}: ${e.message}`)
    }

};



