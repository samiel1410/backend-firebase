import {Application} from 'express';
import { createCard, listCard } from './controllers/card_controller';
import { createPayment, listPayament } from './controllers/payment.controller';
import { createPaymentType, listPayamentType } from './controllers/payment_type_controller';
import { createTreatment, listTreatmentsByPacient } from './controllers/treatment.controller';
import { createPerson, listPerson } from './controllers/person_controller';

export function routesPayment(app: Application){
    app.get('/api/payments/:idperson', listPayament);
    app.post('/api/payments', createPayment);
}

export function routesTreatment(app: Application){
    app.get('/api/treatments/:idpacient', listTreatmentsByPacient);
    app.post('/api/treatments', createTreatment);
}

export function routesCard(app: Application){
    app.get('/api/cards/:page/:limit', listCard);
    app.post('/api/cards', createCard);
}
export function routesPaymentType(app: Application){
    app.get('/api/payment_type/:page/:limit', listPayamentType);
    app.post('/api/payment_type', createPaymentType);
}
export function routesPerson(app: Application){
    app.get('/api/persons/:page/:limit', listPerson);
    app.post('/api/persons', createPerson);
}




