import Appointment from "../models/Appointment.js";

export let createAppointment = async (req, res) => {

    try {

        let appointment = await Appointment.create(req.body);

        res.status(201).json(appointment);

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

export let getAppointments = async (req, res) => {

    try {

        let appointments = await Appointment.find()

        .populate("patient")

        .populate("doctor");

        res.json(appointments);

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

export let updateAppointment = async (req, res) => {

    try {

        let appointment = await Appointment.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new: true

            }

        );

        res.json(appointment);

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

export let deleteAppointment = async (req, res) => {

    try {

        await Appointment.findByIdAndDelete(req.params.id);

        res.json({

            message: "Appointment Deleted"

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};