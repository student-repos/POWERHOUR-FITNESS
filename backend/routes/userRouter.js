import {Router} from "express";
import {
    signup,
    login,
    verifyToken,
    // logout,
    getProtected,
    postNewUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
} from "../controllers/userController.js";
import {isAuth} from "../middlewares/isAuth.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify/:token", verifyToken);
router.get("/getprotected",isAuth, getProtected);
// router.post("/logout", logout);
router.post("/", postNewUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

export default router;