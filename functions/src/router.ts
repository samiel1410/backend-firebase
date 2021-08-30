import {Application} from 'express';
import { createCard, listCard } from './controllers/card_controller';
import { createExpense, listPayament } from './controllers/expense.controller';
import { createExpenseType, listExpenseType } from './controllers/expense_type_controller';
import { createCheck, listCheck } from './controllers/check_controller';
import { createIncomeType, listIncomeType } from './controllers/income_type_controller';
import { createIncome, listIncome } from './controllers/income_controller';
import { listCategoriExpense } from './controllers/expense_categori';
import { signUp } from './controllers/auth.controller';
import { createPerson, retrievePerson, updatePerson, deletePerson, countPerson, listPerson } from './controllers/person';
import { isAuthenticated, isAuthorized } from './middleware';
export function routesExpense(app: Application){
    app.get('/api/expense/:page/:limit', listPayament);
    app.post('/api/expense', createExpense);
}

export function routesCheck(app: Application){
    app.get('/api/checks/:page/:limit', listCheck);
    app.post('/api/checks', createCheck);
}
export function routesAuth(app: Application) {
    app.post('/api/auth/signup', signUp);    
}

export function routesCard(app: Application){
    app.get('/api/cards/:idperson', listCard);
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

export function routesCategori(app: Application){
    app.get('/api/expense_categori/:categori', listCategoriExpense);
}


export function routesPerson(app: Application) {
    app.post('/api/persons',[ isAuthenticated, isAuthorized({ hasRole: ['admin','teacher'] }), createPerson ]);
    app.get('/api/persons/:id', retrievePerson);
    app.put('/api/persons/:id', [ isAuthenticated, isAuthorized({ hasRole: ['teacher'] }), updatePerson ]);
    app.delete('/api/persons/:id', [ isAuthenticated, isAuthorized({ hasRole: ['admin'] }), deletePerson ]);
    app.get('/api/count/persons', countPerson);
    app.get('/api/page/persons/:page/:limit', listPerson);
}