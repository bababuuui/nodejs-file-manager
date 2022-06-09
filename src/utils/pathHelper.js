import path from "path";
import {OPERATION_FAILED} from "../constants/messagesToUser.js";
import CurrentFolder from "./currentFolder.js";
import {isPathValid} from "./pathCheck.js";


export const getResolvedPath = (desiredPath) => {
    let resultPath;

    if(!desiredPath){
        console.error(OPERATION_FAILED);
    }
    if(path.isAbsolute(desiredPath)){
        resultPath= desiredPath;
    }
    else{
        resultPath= path.join(CurrentFolder.get(),desiredPath);
    }

    if(!isPathValid(resultPath)){
        throw  new Error(OPERATION_FAILED);
    }

    return resultPath;
}