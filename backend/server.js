import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import bodyParser  from "body-parser"
import dotenv from "dotenv";

import http from "http";
import https from "https";
 
function setup() {
    dotenv.config();

    const dev = process.env.NODE_ENV !== 'production';

    const app = express();
    let port = dev ? 80 : 443;

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

    // app.use('/api', auth, (req, res, next) => {
    //     next();
    // });


    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../firewatch/dist', 'index.html'));
    });
    
    http.createServer(app).listen(80);

    if (!dev) {
        var privateKey  = fs.readFileSync('/etc/letsencrypt/live/firewatch.wiki/privkey.pem', 'utf8');
        var certificate = fs.readFileSync('/etc/letsencrypt/live/firewatch.wiki/fullchain.pem', 'utf8')
        https.createServer(credentials, app).listen(443);
    }
}

setup();