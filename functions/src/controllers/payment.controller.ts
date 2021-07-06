/** Controlador :  atender la petición cliente que viene en una url de Router, 
 * interactua con los modelos y los servicios(BDD) y retorna una respuesta**/

import { Request, Response } from "express";
import { Payment } from '../models/payments';
import { db } from "../index";
import { Message } from "../models/message";

const collection = "payments";

export async function createPayment(req: Request, res: Response) {           
    try{                    
        const newPayment = Payment(req.body);
        const paymentAdded = await db.collection(collection).add(newPayment);                            
        return res.status(201).json(Message('Pago agregada', `pago fue agregado con el id ${paymentAdded.id}`, 'success'));
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
        let snapshot = await db.collection(collection).orderBy('title').offset(avoid).limit(limit).get();
        return res.status(200).json(snapshot.docs.map(doc => Payment(doc.data(), doc.id)));        
    } catch (err) {
        return handleError(res, err);
    }       
};

function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}