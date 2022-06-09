import os from "os";

const CurrentFolder = {
    value: os.homedir(),
    get (){
        return this.value;
    },
    set (path){
        this.value= path;
    }

}
export default  CurrentFolder;
