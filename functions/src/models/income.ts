/* Modelo representa el conceptos que van a intearctuar en la app */
/*============ Paciente ============*/
export interface Income {
    idincome? :string,
    category: string,
    description: string,
    amount: number,
    date: string,
    image:string
    
}

export function Income(data :any, id?:string){
    const {category, description, amount, date , image } = data;

    let object :Income = { 
        idincome: id,                
        category: category,
        description: description,
        amount : amount,
        date : date,
        image:image,
        
    };
    return object;
}
