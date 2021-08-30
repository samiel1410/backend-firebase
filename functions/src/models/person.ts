/* Modelo representa el conceptos que van a intearctuar en la app */
/*============ Persona ============*/
export interface Person {
    idperson? :string,
    identification :string,
    name: string,
    surname: string,
    birth: string,
    place: string,
    email: string,
    address: string,
    phone: string,
    created_by? : string,
    created_at : string
}

export function Person(data :any, id?:string, username? : string){
    const { identification, name, surname, birth, place, email, address, phone } = data;

    let object :Person = { 
        idperson: id,        
        identification: identification,
        name: name,
        surname: surname,
        birth: birth,
        place: place,
        email: email,
        address: address,
        phone: phone,
        created_by : username,
        created_at : new Date().toUTCString()
    };
    return object;
}
