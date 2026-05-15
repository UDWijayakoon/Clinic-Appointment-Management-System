import Doctor from "../models/Doctor.js";

export let createDoctor = async (req, res) => {

    try {

        let doctor = await Doctor.create(req.body);

        res.status(201).json(doctor);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export let getDoctors = async (req, res) => {

    try {

        let doctors = await Doctor.find();

        res.json(doctors);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export let updateDoctor = async (req, res) => {

    try {

        let doctor = await Doctor.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true
            }

        );

        res.json(doctor);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export let deleteDoctor = async (req, res) => {

    try {

        await Doctor.findByIdAndDelete(req.params.id);

        res.json({
            message: "Doctor Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};