/* Modelo representa el conceptos que van a intearctuar en la app */
/*============ Terapia ============*/
export interface Terapy {    
    description: string,
    dateTo: string,
    state: string    
}

export function Terapy(data :any){
    const { description, dateTo, state } = data;

    let object :Terapy = {                 
        description : description,
        dateTo : dateTo,
        state : state
    };
    return object;
}
