/* Modelo representa el conceptos que van a intearctuar en la app */
/*============ Paciente ============*/
export interface Income {
    idincome? :string,
    category: string,
    description: string,
    amount: string,
    date: string,
    
}

export function Income(data :any, id?:string){
    const {category, description, amount, date } = data;

    let object :Income = { 
        idincome: id,                
        category: category,
        description: description,
        amount : amount,
        date : date,
        
    };
    return object;
}
