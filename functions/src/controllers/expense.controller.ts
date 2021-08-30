/** Controlador :  atender la petición cliente que viene en una url de Router, 
 * interactua con los modelos y los servicios(BDD) y retorna una respuesta**/

 import { Request, Response } from "express";
 import { Expense } from '../models/expense';
 import { db } from "../index";
 import { Message } from "../models/message";
 
 const collection = "expense";
 
 export async function createExpense(req: Request, res: Response) {           
     try{                    
         const newExpense = Expense(req.body);
         const ExpenseAdded = await db.collection(collection).add(newExpense);                            
         return res.status(201).json(Message('Pago agregada', `pago fue agregado con el id ${ExpenseAdded.id}`, 'success'));
     }
     catch(err){
         return handleError(res, err);
     }
 }
 
 export async function listPayament(req: Request, res: Response) {       
    try {
        let page = parseInt(req.params.page);
        let limit = parseInt(req.params.limit);
        let avoid = page == 1 ? 0 : (page - 1) * limit;
        let snapshot = await db.collection(collection).orderBy('categori').offset(avoid).limit(limit).get();
        return res.status(200).json(snapshot.docs.map(doc => Expense(doc.data(), doc.id)));      
     } catch (err) {
         return handleError(res, err);
     }       
 };
 
 function handleError(res: Response, err: any) {
     return res.status(500).send({ message: `${err.code} - ${err.message}` });
 }