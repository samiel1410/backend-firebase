/* Modelo representa el conceptos que van a intearctuar en la app */
/*============ Paciente ============*/
export interface Person {
    idperson? :string,
    name: string,
    biography: string,
    photo: string,
    
}

export function Person(data :any, id?:string){
    const {name, biography, photo } = data;

    let object :Person = { 
        idperson: id,                
        name: name,
        biography: biography,
        photo : photo,
        
    };
    return object;
}