import {Application} from 'express';
import { createCard, listCard } from './controllers/card_controller';
import { createPayment, listPayament } from './controllers/payment.controller';
import { createTreatment, listTreatmentsByPacient } from './controllers/treatment.controller';

export function routesPayment(app: Application){
    app.get('/api/payments/:page/:limit', listPayament);
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




