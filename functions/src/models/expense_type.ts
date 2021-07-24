/* Modelo representa el conceptos que van a intearctuar en la app */
/*============ Paciente ============*/
export interface ExpenseType {    
    name: string,
    description: string,
    image: string,
  
}

export function ExpenseType(data :any, id?:string){
    const {name, description, image } = data;

    let object :ExpenseType = { 
                        
        name: name,
        description: description,
        image : image,

    };
    return object;
}
