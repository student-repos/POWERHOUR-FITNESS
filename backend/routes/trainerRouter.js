import { Router } from "express";
import { getAllTrainers } from "../controllers/trainerController.js";

const router = Router();
router.get("/", getAllTrainers);


export default router;