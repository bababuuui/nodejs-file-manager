import * as path  from "path"
import CurrentFolder from "../utils/currentFolder.js";

export const getUpDir =  () => {
        return path.join(CurrentFolder.get(),"..");
};
