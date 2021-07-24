/* Modelo representa el conceptos que van a intearctuar en la app */
/*============ Paciente ============*/
export interface IncomeType {
    name: string,
    description: string,

    
}

export function IncomeType(data :any, id?:string){
    const {name, description} = data;

    let object :IncomeType = {        
        name: name,
        description: description,
        
    };
    return object;
}
