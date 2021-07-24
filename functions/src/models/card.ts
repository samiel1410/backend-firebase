/* Modelo representa el conceptos que van a intearctuar en la app */
/*============ Paciente ============*/
export interface Card {
    idcard? :string,
    name: string,
    idperson: string  
    
}

export function Card(data :any, id?:string){
    const {name , idperson } = data;

    let object :Card = { 
        idcard: id,                
        name: name,
        idperson : idperson,
        
    };
    return object;
}
