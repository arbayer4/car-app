const { Router } = require("express");
const carsRouter = require("./cars");
const usersRouter = require("./users");

const router = Router();

router.get("/", (req, res) => res.send("This is the root of car API"));

router.use("/", usersRouter);
router.use("/cars", carsRouter);

module.exports = router;
