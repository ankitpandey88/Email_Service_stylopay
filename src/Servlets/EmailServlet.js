// signup Routes logic
import express from "express";
import * as functions from "../Controllers/EmailController.js";

const router = express.Router();


router.post("/send-mail-pp", functions.sendMailPP)

router.post('/create-template', functions.createTemplate);

export default router;
