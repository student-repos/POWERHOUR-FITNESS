import {Router} from "express";
import {
    postNewOffer,
    getAllOffers,
    updateOfferById,
    deleteOfferById,
} from "../controllers/offerController.js";

const router = Router();


router.post("/", postNewOffer);
router.get("/", getAllOffers);
// router.get("/offer/:id", getOfferById);
router.put("/:id", updateOfferById);
router.delete("/:id", deleteOfferById);

export default router