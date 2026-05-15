import Patient from "../models/Patient.js";

export let createPatient = async (req, res) => {

    try {

        let patient = await Patient.create(req.body);

        res.status(201).json(patient);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export let getPatients = async (req, res) => {

    try {

        let patients = await Patient.find();

        res.json(patients);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export let updatePatient = async (req, res) => {

    try {

        let patient = await Patient.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true
            }

        );

        res.json(patient);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export let deletePatient = async (req, res) => {

    try {

        await Patient.findByIdAndDelete(req.params.id);

        res.json({
            message: "Patient Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};