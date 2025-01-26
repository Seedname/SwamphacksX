import express from 'express'
import { addIncident, getIncidents } from '../controllers/incidents.js';
import { loadFires, planRoute } from '../controllers/fires.js';

const router = express.Router();

router.post('/add-incident', addIncident);
router.post('/get-incidents', getIncidents);

router.post('/fire', loadFires);
router.post('/plan', planRoute);

export default router;