import path from "path";
import {OPERATION_FAILED} from "../constants/messagesToUser.js";
import CurrentFolder from "./currentFolder.js";


export const getResolvedPath = (desiredPath) => {
    if(!desiredPath){
        console.error(OPERATION_FAILED);
    }
    let resultPath;
    if(path.isAbsolute(desiredPath)){
        resultPath= desiredPath;
    }
    else{
        resultPath= path.join(CurrentFolder.get(),desiredPath);
    }
    return resultPath;
}