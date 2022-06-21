import path from "path";
import CurrentFolder from "./currentFolder.js";


export const getResolvedPath = (desiredPath) => {
    let resultPath;

    if(desiredPath){
        if(path.isAbsolute(desiredPath)){
            resultPath= desiredPath;
        }
        else{
            resultPath= path.join(CurrentFolder.get(),desiredPath);
        }
    }
    return resultPath;
}