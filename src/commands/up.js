import * as path  from "path"

export const getUpDir =  (currentPath) => {
        return path.join(currentPath,"..");
};
