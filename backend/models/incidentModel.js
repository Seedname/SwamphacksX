import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Incident = mongoose.model('Incident', incidentSchema, 'incident-reports');
export default Incident;