/** Controlador :  atender la petición cliente que viene en una url de Router, 
 * interactua con los modelos y los servicios(BDD) y retorna una respuesta**/

 import { Request, Response } from "express";
 import { IncomeType } from '../models/income_type';
 import { db } from "../index";
 import { Message } from "../models/message";
 
 const collection = "income_type";
 
 export async function createIncomeType(req: Request, res: Response) {           
     try{                    
         const newIncomeType = IncomeType(req.body);
         const incomeTypeAdded = await db.collection(collection).add(newIncomeType);                            
         return res.status(201).json(Message('Ingreso agregado', `ingreso fue agregado con el id ${incomeTypeAdded.id}`, 'success'));
     }
     catch(err){
         return handleError(res, err);
     }
 }
 
 export async function listIncomeType(req: Request, res: Response) {       
     try {
         let page = parseInt(req.params.page);
         let limit = parseInt(req.params.limit);
         let avoid = page == 1 ? 0 : (page - 1) * limit;
         let snapshot = await db.collection(collection).orderBy('name').offset(avoid).limit(limit).get();
         return res.status(200).json(snapshot.docs.map(doc => IncomeType(doc.data(), doc.id)));        
     } catch (err) {
         return handleError(res, err);
     }       
 };
 
 function handleError(res: Response, err: any) {
     return res.status(500).send({ message: `${err.code} - ${err.message}` });
 }