import fs from "fs";
import crypto from "crypto";
import {OPERATION_FAILED} from "../constants/messagesToUser.js";
import {getResolvedPath} from "../utils/pathHelper.js";

export const calculateHash =  (pathToFile) => {
    try{
        const readStream = fs.createReadStream(getResolvedPath(pathToFile))
        const hash = crypto.createHash('sha256');
        hash.setEncoding("hex");
        readStream.pipe(hash);
        hash.on('data', function (data) {
            console.log(data);
        });
    }
    catch (e) {
        console.error(`${OPERATION_FAILED}: ${e.message}`)
    }


};