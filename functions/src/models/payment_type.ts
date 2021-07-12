/* Modelo representa el conceptos que van a intearctuar en la app */
/*============ Paciente ============*/
export interface PaymentType {    
    name: string,
    description: string,
    image: string,
  
}

export function PaymentType(data :any, id?:string){
    const {name, description, image } = data;

    let object :PaymentType = { 
                        
        name: name,
        description: description,
        image : image,

    };
    return object;
}
