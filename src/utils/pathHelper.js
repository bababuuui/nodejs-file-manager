import path from "path";


export const resolvePath = (currentPath, desiredPath) => {
    let resultPath;
    if(path.isAbsolute(desiredPath)){
        resultPath= desiredPath;
    }
    else{
        resultPath= path.join(currentPath,desiredPath);
    }
    return resultPath;
}