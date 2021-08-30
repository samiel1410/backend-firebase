/* Modelo representa el conceptos que van a intearctuar en la app */
/*============ Paciente ============*/
export interface IncomeType {
    name: string,
    description: string,
    image: string

    
}

export function IncomeType(data :any, id?:string){
    const {name, description , image} = data;

    let object :IncomeType = {        
        name: name,
        description: description,
        image: image
        
    };
    return object;
}
