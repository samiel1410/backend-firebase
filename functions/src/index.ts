import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import {routesPerson, routesCard, routesExpense,routesAuth, routesExpenseType, routesCheck, routesIncomeType, routesIncome, routesCategori } from './router';

//============= CONFIG ================//

//============= FIREBASE CREDENCIALES ================//
admin.initializeApp(functions.config().firebase);
//============= FIREBASE BASE DE DATOS ================//
const db = admin.firestore();
db.settings({ignoreUndefinedProperties : true, timestampsInSnapshot: true});

//============= SERVIDOR EXPRESS ================//
const server = express();
server.use(cors({origin: true}));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

//============= RUTAS ================//
routesExpense(server);
routesCheck(server);
routesCard(server);
routesExpenseType(server);
routesIncomeType(server);
routesIncome(server);
routesPerson(server);
routesCategori(server);
routesAuth(server);
//============= EXPORTACION DEL SERVIDOR ================//
export const api = functions.https.onRequest(server);
export { db };