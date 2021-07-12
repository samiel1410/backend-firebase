/** Controlador :  atender la petición cliente que viene en una url de Router, 
 * interactua con los modelos y los servicios(BDD) y retorna una respuesta**/

 import { Request, Response } from "express";
 import { PaymentType } from '../models/payment_type';
 import { db } from "../index";
 import { Message } from "../models/message";
 
 const collection = "payment_type";
 
 export async function createPaymentType(req: Request, res: Response) {           
     try{                    
         const newPaymentType = PaymentType(req.body);
         const paymentTypeAdded = await db.collection(collection).add(newPaymentType);                            
         return res.status(201).json(Message('Pago agregada', `pago fue agregado con el id ${paymentTypeAdded.id}`, 'success'));
     }
     catch(err){
         return handleError(res, err);
     }
 }
 
 export async function listPayamentType(req: Request, res: Response) {       
     try {
         let page = parseInt(req.params.page);
         let limit = parseInt(req.params.limit);
         let avoid = page == 1 ? 0 : (page - 1) * limit;
         let snapshot = await db.collection(collection).orderBy('name').offset(avoid).limit(limit).get();
         return res.status(200).json(snapshot.docs.map(doc => PaymentType(doc.data(), doc.id)));        
     } catch (err) {
         return handleError(res, err);
     }       
 };
 
 function handleError(res: Response, err: any) {
     return res.status(500).send({ message: `${err.code} - ${err.message}` });
 }