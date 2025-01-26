import express from 'express'
import { addIncident, getIncidents } from '../controllers/incidents.js';

const router = express.Router();

router.post('/add-incident', addIncident);
router.get('/get-incidents', getIncidents);

export default router;