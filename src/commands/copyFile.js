import * as fs  from 'fs';
import {OPERATION_FAILED} from "../constants/messagesToUser.js";
import * as path from "path";
import {getResolvedPath} from "../utils/pathHelper.js";

export const copyFile = async ( pathToFile, pathToNewDir, deleteOldFile) => {
    try{
        const nameOfFile = path.basename(getResolvedPath(pathToFile));
        await fs.promises.copyFile( getResolvedPath(pathToFile),  path.join(getResolvedPath(pathToNewDir),nameOfFile));
        console.log( "File copied to  " +path.join(getResolvedPath(pathToNewDir),nameOfFile));

        if(deleteOldFile){
            await fs.promises.rm( getResolvedPath(pathToFile));
            console.log( "Old file removed");
        }

    }
    catch (e) {
        console.error(OPERATION_FAILED + e.message)
    }

};



