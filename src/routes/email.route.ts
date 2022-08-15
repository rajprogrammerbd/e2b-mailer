import express from 'express';
const router = express.Router();
import emailControllers from "../controllers/email.controllers";

router.post('/email/send', emailControllers.sendEmail);

export default router;
