const { Router } = require("express");
const controllers = require("../controllers/cars");
const restrict = require("../helpers/restrict");

const router = Router();

router.get("/", controllers.getCars);
router.get("/:id", controllers.getCar);
router.post("/", restrict, controllers.createCar);
router.put("/:id", restrict, controllers.updateCar);
router.delete("/:id", restrict, controllers.deleteCar);

module.exports = router;
