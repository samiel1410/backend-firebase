/* Modelo representa el conceptos que van a intearctuar en la app */
/*============ Paciente ============*/
export interface Check {
    idcheck? :string,
    bankinInstitution: string,
    numberCheck: string,
    ownerName: string,
    checkIdentification: string,
    
}

export function Check(data :any, id?:string){
    const {bankinInstitution, numberCheck, ownerName, checkIdentification } = data;

    let object :Check = { 
        idcheck: id,                
        bankinInstitution: bankinInstitution,
        numberCheck: numberCheck,
        ownerName: ownerName,
        
        checkIdentification: checkIdentification,
        
    };
    return object;
}
