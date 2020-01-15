import DIContainer from "../../di/di-container";
import { UserController } from "./user.controller";
import express from "express";
const router = express.Router();
const controller = DIContainer.resolve<UserController>(UserController);

router.post("/login", (req, res) => {
  controller.authenticateUser(req, res);
});

export default router;