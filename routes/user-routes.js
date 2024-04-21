import express from "express";
import { deletuser, getAllUsers, getbookingsofuser, getuserbyid, login, singup, updateUser } from "../controllers/user-controller.js";
const userRouter = express.Router();
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getuserbyid);
userRouter.post("/signup", singup);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deletuser);
userRouter.post("/login", login);
userRouter.get("/bookings/:id",getbookingsofuser );
export default userRouter;