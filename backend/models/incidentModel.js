import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({
  type: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  date: { type: Date, default: Date.now }
});

const Incident = mongoose.model('Incident', incidentSchema);
export default Incident;