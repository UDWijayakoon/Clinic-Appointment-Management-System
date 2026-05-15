import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

export let registerUser = async (req, res) => {

    try {

        let { name, email, password, role } = req.body;

        let userExists = await User.findOne({ email });

        if (userExists) {

            return res.status(400).json({
                message: "User already exists"
            });

        }

        let hashedPassword = await bcrypt.hash(password, 10);

        await User.create({

            name,
            email,
            password: hashedPassword,
            role

        });

        res.status(201).json({
            message: "User Registered"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export let loginUser = async (req, res) => {

    try {

        let { email, password } = req.body;

        let user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({
                message: "User Not Found"
            });

        }

        let isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {

            return res.status(400).json({
                message: "Invalid Password"
            });

        }

        let token = jwt.sign(

            {
                id: user._id,
                role: user.role
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "1d"
            }

        );

        res.json({
            token
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};