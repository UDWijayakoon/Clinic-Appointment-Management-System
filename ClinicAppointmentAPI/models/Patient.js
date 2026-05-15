import mongoose from "mongoose";

let patientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    age: Number,

    gender: String,

    phone: String

});

let Patient = mongoose.model(
    "Patient",
    patientSchema
);

export default Patient;