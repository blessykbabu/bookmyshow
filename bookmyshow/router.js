import { Router } from "express";

import * as userHandlers from "./request-handlers.js";


const router = Router()

router.route("/register").post(userHandlers.register);
// router.route("/login").post(userHandlers.login);


export default router;