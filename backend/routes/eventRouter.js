import {Router} from "express";
import {
    postNewEvent,
    getAllEvents,
    updateEventById,
    deleteEventById,} from "../controllers/eventController.js";

const router = Router();

router.post("/", postNewEvent);
router.get("/", getAllEvents);
// router.get("/event/:id", getEventById);
router.put("/:id", updateEventById);
router.delete("/:id", deleteEventById);

export default router