import mongoose from "mongoose";

let appointmentSchema = new mongoose.Schema({

    patient: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "Patient",

        required: true

    },

    doctor: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "Doctor",

        required: true

    },

    appointmentDate: {

        type: Date,

        required: true

    },

    status: {

        type: String,

        default: "Pending"

    }

});

let Appointment = mongoose.model(

    "Appointment",

    appointmentSchema

);

export default Appointment;