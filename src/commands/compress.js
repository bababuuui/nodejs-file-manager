import {promisify} from "util";
import {pipeline} from "stream";
import {createBrotliCompress} from "zlib";
import fs from "fs";
import {getResolvedPath} from "../utils/pathHelper.js";
import {OPERATION_FAILED} from "../constants/messagesToUser.js";


export const compress = async (pathToFile, pathToDestination) => {
    try{
        const pipe = promisify(pipeline);
        const stream = createBrotliCompress();
        const source = fs.createReadStream(getResolvedPath(pathToFile));
        const destination = fs.createWriteStream(getResolvedPath(pathToDestination));
        await pipe(source, stream, destination);
        console.log("File compressed");
    }
    catch (e) {
        console.error(`${OPERATION_FAILED}: ${e.message}`)
    }


};
