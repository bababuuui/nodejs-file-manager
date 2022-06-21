import * as fs from 'fs';
import {OPERATION_FAILED} from "../constants/messagesToUser.js";
import * as path from "path";
import {getResolvedPath} from "../utils/pathHelper.js";

export const renameFile = async ( pathToFile, newFileName) => {
    try{
        const dir = path.dirname(getResolvedPath(pathToFile));
        await fs.promises.rename( getResolvedPath(pathToFile), path.join(dir,newFileName));
        console.log("File renamed");
    }
    catch (e) {
        console.error(`${OPERATION_FAILED}: ${e.message}`)
    }

};



