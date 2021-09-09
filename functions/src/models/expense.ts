/* Modelo representa el conceptos que van a intearctuar en la app */
/*============ Paciente ============*/
export interface Expense {
    idexpense? :string,
    description: string,
    amount: number,
    address: string,
    categori: string,
    date : string,
    image:string,
    photo:string,
    georeference:object
}

export function Expense(data :any, id?:string){
    const {description, amount, categori, address, date, image ,photo, georeference } = data;

    let object :Expense = { 
        idexpense: id,               
        description: description,
        amount : amount,
        categori: categori,
        address: address,
        date: date,
        image:image,
        photo:photo,
        georeference:georeference
        
    };
    return object;
}