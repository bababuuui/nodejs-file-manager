import {OPERATION_FAILED} from "../constants/messagesToUser.js";
import {isDir, isPathValid} from "../utils/pathCheck.js";
import {getResolvedPath} from "../utils/pathHelper.js";
import CurrentFolder from "../utils/currentFolder.js";

export const goToDir =  async ( desiredPath) => {
    try{

        const resolvedPath = getResolvedPath(desiredPath);
        if( !await isPathValid(resolvedPath) || !await isDir(resolvedPath)){
            throw new Error("Dir doesn't exist")
        }
        return resolvedPath;

    }
    catch (e) {
     console.log(OPERATION_FAILED);
     return CurrentFolder.get();
    }

};
