import { Router } from "express";
import {
  signup,
  login,
  verifyToken,
  getProtected,
  getAdminDashboardData,
  getTrainerDashboardData,
  getMemberDashboardData,
  postNewUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
} from "../controllers/userController.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify/:token", verifyToken);
router.get("/getprotected", isAuth, getProtected);

// Dashboard data endpoints
router.get("/dashboard/admin", isAuth, getAdminDashboardData);
router.get("/dashboard/trainer", isAuth, getTrainerDashboardData);
router.get("/dashboard/member", isAuth, getMemberDashboardData);

router.post("/", postNewUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

export default router;
