/* Modelo representa el conceptos que van a intearctuar en la app */
/*============ Paciente ============*/
export interface Payment {
    idpayment? :string,
    title: string,
    description: string,
    amount: string,
    address: string,
    typePage: string,
    date : string,
    idperson: string,
    detailPay : string  
}

export function Payment(data :any, id?:string){
    const {title, description, amount, address, typePage, date, idperson, detailPay } = data;

    let object :Payment = { 
        idpayment: id,                
        title: title,
        description: description,
        amount : amount,
        address: address,
        typePage: typePage,
        date: date,
        idperson: idperson,
        detailPay : detailPay
    };
    return object;
}