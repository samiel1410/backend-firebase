import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
<<<<<<< HEAD
import { routesCard, routesPayment, routesPaymentType, routesPerson, routesTreatment ,routesPayment1 } from './router';
=======
import { routesCard, routesPayment, routesExpenseType, routesPerson, routesCheck, routesIncomeType, routesIncome } from './router';
>>>>>>> bf0f1afdbacdc7e2e320ec491dc7a41f2db4f8d0

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
routesPayment(server);
routesCheck(server);
routesCard(server);
routesExpenseType(server);
routesIncomeType(server);
routesIncome(server);
routesPerson(server);
routesPayment1(server);
//============= EXPORTACION DEL SERVIDOR ================//
export const api = functions.https.onRequest(server);
export { db };