import express from "express";

import protect from "../middleware/authMiddleware.js";

import adminOnly from "../middleware/adminMiddleware.js";

import {

    createDoctor,
    getDoctors,
    updateDoctor,
    deleteDoctor

} from "../controllers/doctorController.js";

let router = express.Router();

router.post("/", protect, createDoctor);

router.get("/", protect, getDoctors);

router.put("/:id", protect, updateDoctor);

router.delete(
    "/:id",
    protect,
    adminOnly,
    deleteDoctor
);

export default router;