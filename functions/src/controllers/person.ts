/** Controlador :  atender la petición cliente que viene en una url de Router, 
 * interactua con los modelos y los servicios(BDD) y retorna una respuesta**/

import { Request, Response } from "express";
import { Person } from '../models/person';
import { db } from "../index";
import { Message } from "../models/message";

const collection = "persons";

export async function createPerson(req: Request, res: Response) {           
    try{            
        const { email } = res.locals;
        const newPerson = Person(req.body, undefined, email);
        const personAdded = await db.collection(collection).add(newPerson);                            
        return res.status(201).json(Message('Persona agregada', `Persona fue agregada con el id ${personAdded.id}`, 'success'));
    }
    catch(err){
        return handleError(res, err);
    }
}

export async function retrievePerson(req: Request, res: Response) {           

    try{
        const doc = await db.collection(collection).doc(req.params.id).get();        
        if(!doc) {
            return res.status(404).json(Message('Persona no encontrada', `Persona con el id ${req.params.id} no encontrada`, 'warning'));               
        }        
        return res.status(200).json(Person(doc.data(), doc.id));
    }
    catch(err){
        return handleError(res, err);
    }    
}

export async function updatePerson(req: Request, res: Response) {       
    try {
        const personToUpdate = Person(req.body);
        await db.collection(collection).doc(req.params.id).set(personToUpdate, {merge : true});
        return res.status(200).json(Message('Persona actualizada', `Persona con el id ${req.params.id} fue actualizada`, 'success'));        
    } catch (err) {
        return handleError(res, err);
    }
}

export async function deletePerson(req: Request, res: Response) {       
    try{
        await db.collection(collection).doc(req.params.id).delete();
        return res.status(200).json(Message('Persona eliminada', `Persona con el id ${req.params.id} fue eliminada correctamente`, 'success')
        );
    }
    catch(err){
        return handleError(res, err);
    }
};

export async function listPerson(req: Request, res: Response) {       
    try {
        let page = parseInt(req.params.page);
        let limit = parseInt(req.params.limit);
        let avoid = page == 1 ? 0 : (page - 1) * limit;
        let snapshot = await db.collection(collection).orderBy('surname').offset(avoid).limit(limit).get();
        return res.status(200).json(snapshot.docs.map(doc => Person(doc.data(), doc.id)));        
    } catch (err) {
        return handleError(res, err);
    }       
};

export async function countPerson(req: Request, res: Response) {       
    try {
        let snapshot = await db.collection(collection).get();        
        return res.status(200).json({ numberDocs : snapshot.size });        
    } catch (err) {
        return handleError(res, err);
    }
}


function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}