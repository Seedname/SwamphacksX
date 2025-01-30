import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import bodyParser  from "body-parser"
import dotenv from "dotenv";
import http from "http";
import https from "https";
import mongoose from 'mongoose';
import router from './routes/routes.js';
import fs from "fs";

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("Database Connected"));
}

async function setup() {
    dotenv.config();

    const dev = process.env.NODE_ENV !== 'production';

    const app = express();

    app.use(cors({
        origin: true,
        methods: ['GET', 'POST'],   
        credentials: true
    }));
    
    const __filename = fileURLToPath(import.meta.url);  
    const __dirname = path.dirname(__filename);

    app.use(express.json());
    app.use(bodyParser.json({limit: '100mb'}));
    app.use(bodyParser.urlencoded({ limit: '100mb', extended: true}));
    app.use(cookieParser());

    app.use(express.static(path.join(__dirname, '../firewatch/dist')));

    await connectDB();

    app.use('/api', router);

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../firewatch/dist', 'index.html'));
    });
    
    http.createServer(app).listen(80);
    if (!dev) {
        let privateKey  = fs.readFileSync('/home/julian/certs/privkey.pem', 'utf8');
        let certificate = fs.readFileSync('/home/julian/certs/fullchain.pem', 'utf8');
        let credentials = {key: privateKey, cert: certificate};
        https.createServer(credentials, app).listen(443);
    }

}

await setup();
