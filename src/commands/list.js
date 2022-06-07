import fs from "fs";
import {OPERATION_FAILED} from "../constants/messagesToUser.js";

export const printListOfFiles = async (path) => {
    try{
        console.log( await fs.promises.readdir(path));
    }
    catch (e) {
        console.error(OPERATION_FAILED)
    }

};
