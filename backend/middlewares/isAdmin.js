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
import isAdmin from "../middlewares/isAdmin.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify/:token", verifyToken);
router.get("/getprotected", isAuth, getProtected);

// Dashboard data endpoints
router.get("/dashboard/admin", isAuth, getAdminDashboardData);
router.get("/dashboard/trainer", isAuth, getTrainerDashboardData);
router.get("/dashboard/member", isAuth, getMemberDashboardData);

// Admin-only routes
router.post("/addmember", isAuth, isAdmin, postNewUser);
router.get("/allusers", isAuth, isAdmin, getAllUsers);
router.get("/user/:id", isAuth, isAdmin, getUserById);
router.put("/user/:id", isAuth, isAdmin, updateUserById);
router.delete("/user/:id", isAuth, isAdmin, deleteUserById);

export default router;
