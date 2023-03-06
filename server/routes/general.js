import express from "express";
import { getUser} from "../controllers/general.js";

const router = express.Router();

router.get("/user/:revelance", getUser);


export default router;