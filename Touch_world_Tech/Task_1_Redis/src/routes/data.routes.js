import express from "express";
import { dataController } from "../controller/data.controller.js";

const router = express.Router();

router.post("/store", dataController.storeData);

router.get("/retrieve/:key", dataController.retrieveData);

export default router;
