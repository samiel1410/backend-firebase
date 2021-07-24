import {Application} from 'express';
import { createCard, listCard } from './controllers/card_controller';
import { createPayment, listPayament } from './controllers/payment.controller';
import { createExpenseType, listExpenseType } from './controllers/expense_type_controller';
import { createPerson, listPerson } from './controllers/person_controller';
import { createCheck, listCheck } from './controllers/check_controller';
import { createIncomeType, listIncomeType } from './controllers/income_type_controller';
import { createIncome, listIncome } from './controllers/income_controller';

export function routesPayment(app: Application){
    app.get('/api/payments/:idperson', listPayament);
    app.post('/api/payments', createPayment);
}

export function routesCheck(app: Application){
    app.get('/api/checks/:page/:limit', listCheck);
    app.post('/api/checks', createCheck);
}

export function routesCard(app: Application){
    app.get('/api/cards/:page/:limit', listCard);
    app.post('/api/cards', createCard);
}
export function routesExpenseType(app: Application){
    app.get('/api/expense_type/:page/:limit', listExpenseType);
    app.post('/api/expense_type', createExpenseType);
}
export function routesIncomeType(app: Application){
    app.get('/api/income_type/:page/:limit', listIncomeType);
    app.post('/api/income_type', createIncomeType);
}
export function routesIncome(app: Application){
    app.get('/api/incomes/:page/:limit', listIncome);
    app.post('/api/incomes', createIncome);
}
export function routesPerson(app: Application){
    app.get('/api/persons/:page/:limit', listPerson);
    app.post('/api/persons', createPerson);
}




