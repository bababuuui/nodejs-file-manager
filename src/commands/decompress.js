import {promisify} from "util";
import {pipeline} from "stream";
import {createBrotliDecompress} from "zlib";
import fs from "fs";
import {getResolvedPath} from "../utils/pathHelper.js";
import {OPERATION_FAILED} from "../constants/messagesToUser.js";


export const decompress = async (pathToFile, pathToDestination) => {
    try{
        const pipe = promisify(pipeline);
        const stream = createBrotliDecompress();
        const source = fs.createReadStream(getResolvedPath(pathToFile));
        const destination = fs.createWriteStream(getResolvedPath(pathToDestination));
        await pipe(source, stream, destination);
    }
    catch (e) {
        console.error(OPERATION_FAILED + e.message)
    }


};
