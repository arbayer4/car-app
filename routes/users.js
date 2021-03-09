const { Router } = require("express");
const controllers = require("../controllers/users");

const router = Router();

router.post("/sign-up", controllers.signUp);
router.post("sign-in", controllesr.signIn);
router.get("/verify", controllers.verify);
router.post("/change-password", controllers.changePassword);

module.exports = router;
