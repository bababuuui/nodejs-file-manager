import {OPERATION_FAILED} from "../constants/messagesToUser.js";
import {isDir} from "../utils/pathCheck.js";
import {getResolvedPath} from "../utils/pathHelper.js";
import CurrentFolder from "../utils/currentFolder.js";

export const goToDir =  async ( desiredPath) => {
    try{

        const resolvedPath = getResolvedPath(desiredPath);
        if(  !await isDir(resolvedPath)){
            throw new Error("Dir doesn't exist")
        }
        return resolvedPath;

    }
    catch (e) {
     console.error(`${OPERATION_FAILED}: ${e.message}`)
     return CurrentFolder.get();
    }

};
