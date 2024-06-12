import {Router} from "express";
import{
    postNewContact,
    getAllContacts,
    getContactById
} from "../controllers/contactController.js";

const router = Router();

router.post("/", postNewContact);
router.get("/", getAllContacts);
router.get("/:id", getContactById);

export default router;
