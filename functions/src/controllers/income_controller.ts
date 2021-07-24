/** Controlador :  atender la petición cliente que viene en una url de Router, 
 * interactua con los modelos y los servicios(BDD) y retorna una respuesta**/

 import { Request, Response } from "express";
 import { Income } from '../models/income';
 import { db } from "../index";
 import { Message } from "../models/message";
 
 const collection = "income";
 
 export async function createIncome(req: Request, res: Response) {           
     try{                    
         const newIncome = Income(req.body);
         const incomeAdded = await db.collection(collection).add(newIncome);                            
         return res.status(201).json(Message('Ingreso agregado', `ingreso fue agregado con el id ${incomeAdded.id}`, 'success'));
     }
     catch(err){
         return handleError(res, err);
     }
 }
 
 export async function listIncome(req: Request, res: Response) {       
     try {
         let page = parseInt(req.params.page);
         let limit = parseInt(req.params.limit);
         let avoid = page == 1 ? 0 : (page - 1) * limit;
         let snapshot = await db.collection(collection).orderBy('category').offset(avoid).limit(limit).get();
         return res.status(200).json(snapshot.docs.map(doc => Income(doc.data(), doc.id)));        
     } catch (err) {
         return handleError(res, err);
     }       
 };
 
 function handleError(res: Response, err: any) {
     return res.status(500).send({ message: `${err.code} - ${err.message}` });
 }