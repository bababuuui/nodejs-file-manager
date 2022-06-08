import {OPERATION_FAILED} from "../constants/messagesToUser.js";
import {isDir, isPathValid} from "../utils/pathCheck.js";
import {resolvePath} from "../utils/pathHelper.js";

export const goToDir =  async (currentPath, desiredPath) => {
    const resolvedPath = resolvePath(currentPath,desiredPath);
    try{
        if( !await isPathValid(resolvedPath) || !await isDir(resolvedPath)){
            throw new Error("Dir doesn't exist")
        }
        return resolvedPath;

    }
    catch (e) {
     console.log(OPERATION_FAILED);
     return currentPath;
    }

};
