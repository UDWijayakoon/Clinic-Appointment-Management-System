import mongoose from "mongoose";

let doctorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    specialization: String,

    phone: String,

    available: {
        type: Boolean,
        default: true
    }

});

let Doctor = mongoose.model(
    "Doctor",
    doctorSchema
);

export default Doctor;