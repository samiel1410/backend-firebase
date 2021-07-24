/** Controlador :  atender la petición cliente que viene en una url de Router, 
 * interactua con los modelos y los servicios(BDD) y retorna una respuesta**/

 import { Request, Response } from "express";
 import { Check } from '../models/check';
 import { db } from "../index";
 import { Message } from "../models/message";
 
 const collection = "checks";
 
 export async function createCheck(req: Request, res: Response) {           
     try{                    
         const newCheck = Check(req.body);
         const checkAdded = await db.collection(collection).add(newCheck);                            
         return res.status(201).json(Message('Cheque agregado', `cheque fue agregado con el id ${checkAdded.id}`, 'success'));
     }
     catch(err){
         return handleError(res, err);
     }
 }
 
 export async function listCheck(req: Request, res: Response) {       
     try {
         let page = parseInt(req.params.page);
         let limit = parseInt(req.params.limit);
         let avoid = page == 1 ? 0 : (page - 1) * limit;
         let snapshot = await db.collection(collection).orderBy('bankinInstitution').offset(avoid).limit(limit).get();
         return res.status(200).json(snapshot.docs.map(doc => Check(doc.data(), doc.id)));        
     } catch (err) {
         return handleError(res, err);
     }       
 };
 
 function handleError(res: Response, err: any) {
     return res.status(500).send({ message: `${err.code} - ${err.message}` });
 }