import express from "express";

import protect from "../middleware/authMiddleware.js";
import adminOnly from "../middleware/adminMiddleware.js";

import {

    createPatient,
    getPatients,
    updatePatient,
    deletePatient

} from "../controllers/patientController.js";

let router = express.Router();

router.post("/", protect, createPatient);

router.get("/", protect, getPatients);

router.put("/:id", protect, updatePatient);

router.delete(
    "/:id",
    protect,
    adminOnly,
    deletePatient
);

export default router;