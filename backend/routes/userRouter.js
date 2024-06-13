import { Router } from "express";
import {
  signup,
  login,
  verifyToken,
  // logout,
  getProtected,
  getPictureById,
  postNewUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/userController.js";
import { isAuth } from "../middlewares/isAuth.js";
import multer from "multer";

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the destination folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });
const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify/:token", verifyToken);
router.get("/getprotected", isAuth, getProtected);
// router.post("/logout", logout);
router.post("/", postNewUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/picture/:id", getPictureById);
router.put("/:id", upload.single("picture"), updateUserById);
router.delete("/:id", deleteUserById);

export default router;
