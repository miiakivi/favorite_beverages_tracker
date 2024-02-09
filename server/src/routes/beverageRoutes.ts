import express from "express";
import * as beverageController from "../controllers/beverageController";

const router = express.Router();

router.get( "/beverages", beverageController.getAllBeverages );
router.post( "/beverages", beverageController.postNewBeverage );

export default router;
