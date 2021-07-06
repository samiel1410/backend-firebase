/* Modelo representa el conceptos que van a intearctuar en la app */
/*============ Paciente ============*/
export interface Card {
    idcard? :string,
    name: string,
    
}

export function Card(data :any, id?:string){
    const {name } = data;

    let object :Card = { 
        idcard: id,                
        name: name,
        
    };
    return object;
}
