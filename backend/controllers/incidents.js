import express from "express";
import Incident from '../models/incidentModel.js';

export const addIncident = async (req, res) => {
    
    try {
        const newIncident = new Incident(req.body);
        console.log(newIncident);
        await newIncident.save();
        res.status(201).json({ message : "Incident Reported Successfully" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
};

export const getIncidents = async (req, res) => {
    try {
        const incidents = await Incident.find();
        res.status(200).json(incidents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  
};

// const router = express.Router();

// // Add a new incident report
// router.post('/', async (req, res) => {
//   try {
//     const newIncident = new Incident(req.body);
//     await newIncident.save();
//     res.status(201).json(newIncident);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Get all incidents
// router.get('/', async (req, res) => {
//   try {
//     const incidents = await Incident.find();
//     res.status(200).json(incidents);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;
