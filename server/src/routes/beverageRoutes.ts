import express from "express";
import * as beverageController from "../controllers/beverageController";

const router = express.Router();

router.get( "/coffees", beverageController.getAllCoffees );
router.get( "/teas", beverageController.getAllTeas );

/*router.post( "/coffees", );
router.post( "/teas", );*/
router.post( "/beverages", beverageController.postNewBeverage );

export default router;
