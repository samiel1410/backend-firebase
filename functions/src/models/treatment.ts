/* Modelo representa el conceptos que van a intearctuar en la app */

import { Terapy } from "./terapy";

/*============ Tratamiento ============*/
export interface Treatment {
    idtreatment?:string,
    startDate: string,
    endDate: string,
    diagnostic: string,
    idpacient: string,
    type: string,
    terapies : Terapy[]
}

export function Treatment(data :any, id?:string){
    const { startDate, endDate, diagnostic, idpacient, type, terapies  } = data;

    let object :Treatment = { 
        idtreatment: id,                
        startDate : startDate,
        endDate : endDate,
        diagnostic : diagnostic,
        idpacient : idpacient,
        type : type,
        terapies : terapies
    };
    return object;
}
