import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import bodyParser  from "body-parser"
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
import http from "http";
import https from "https";
import mongoose from 'mongoose';
import router from './routes/routes.js';

let db;
let reports;

async function connectToMongoDB(client){
  try{
      await client.connect();
      db = client.db('firewatch')
      reports = db.collection('incident-reports');
  } catch (error){
      console.error('Failed to connect to database', error);
  }
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

    // app.use('/api', auth, (req, res, next) => {
    //     next();
    // });

    // const client = new MongoClient(process.env.MONGO_URI, {
    //     serverApi: {
    //       version: ServerApiVersion.v1,
    //       strict: true,
    //       deprecationErrors: true,
    //     }
    // });

    // await connectToMongoDB(client);

    app.use('/api', router);

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../firewatch/dist', 'index.html'));
    });
    
    http.createServer(app).listen(80);

    if (!dev) {
        let privateKey  = fs.readFileSync('/etc/letsencrypt/live/firewatch.wiki/privkey.pem', 'utf8');
        let certificate = fs.readFileSync('/etc/letsencrypt/live/firewatch.wiki/fullchain.pem', 'utf8');
        let credentials = {key: privateKey, cert: certificate};
        https.createServer(credentials, app).listen(443);
    }

    // app.use('/incidentreports', incidentRoutes);

}


  


// await connectToMongoDB();

// const app = express();

// let server;

await setup();
// const app = express();
// app.use(cors());
// app.use(express.json()); // Middleware to parse JSON requests

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.once('open', () => console.log('Connected to MongoDB'));

// // Create a schema for the report
// const reportSchema = new mongoose.Schema({
//   name: String,
//   location: String,
//   description: String,
//   date: { type: Date, default: Date.now },
// });

// const Report = mongoose.model('Report', reportSchema);

// // API endpoint to receive form data
// app.post('/api/reports', async (req, res) => {
//   try {
//     const newReport = new Report(req.body);
//     await newReport.save();
//     res.status(201).json({ message: 'Report submitted successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error submitting report', error });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// setup();