/** Controlador :  atender la petición cliente que viene en una url de Router, 
 * interactua con los modelos y los servicios(BDD) y retorna una respuesta**/

import { Request, Response } from "express";
import { db } from "../index";
import { Message } from "../models/message";
import { Treatment } from "../models/treatment";

const collection = "treatments";

export async function createTreatment(req: Request, res: Response) {           
    try{                    
        const newTreatment = Treatment(req.body);
        const treatmentAdded = await db.collection(collection).add(newTreatment);                            
        return res.status(201).json(Message('Tratamiento agregado', `Tratamiento fue agregado con el id ${treatmentAdded.id}`, 'success'));
    }
    catch(err){
        return handleError(res, err);
    }
}


export async function listTreatmentsByPacient(req: Request, res: Response) {       
    try {        
        let idpacient = req.params.idpacient;
        let snapshot = await db.collection(collection).where('idpacient','==',idpacient).get();
        return res.status(200).json(snapshot.docs.map(doc => Treatment(doc.data(), doc.id)));        
    } catch (err) {
        return handleError(res, err);
    }       
};


function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}