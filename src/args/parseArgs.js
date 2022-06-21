const getEnvVars = () => {
   return  process.argv.slice(2);
}

export const getEnvVarValueByName = (name)=> {
    const resultVar=  getEnvVars().find( (variable)=>
    {
        return variable.slice(2).split("=")[0] ===name;
    }
    );

    return resultVar!== undefined ? resultVar.slice(2).split("=")[1]: null;
}