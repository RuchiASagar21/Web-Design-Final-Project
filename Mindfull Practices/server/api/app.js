import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index.js';
//import model from './models/index.js';

const app = express();


mongoose.connect("mongodb+srv://kavyashree1119:Kav19nov97@assignment.shs0uqc.mongodb.net/test", ()=>{
    console.log('connected to mongoDB');
});
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
/**
 * very important step
 * we are enrouting our requests to routes.index.js file here
 */

routes(app);

export default app;