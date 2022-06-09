import path from "path";
import {OPERATION_FAILED} from "../constants/messagesToUser.js";


export const getResolvedPath = (currentPath, desiredPath) => {
    if(!desiredPath){
        console.error(OPERATION_FAILED);
    }
    let resultPath;
    if(path.isAbsolute(desiredPath)){
        resultPath= desiredPath;
    }
    else{
        resultPath= path.join(currentPath,desiredPath);
    }
    return resultPath;
}