const express = require("express");
const bankController = require("../controllers/bank.controller");
const userMiddleware = require("../middleware/check-auth");
const router = express.Router();

router.post(
  "/create-bank",
  userMiddleware.checkAuth,
  bankController.createBank
);
router.get("/bycode", bankController.byBranchId);
router.get("/:id", bankController.show);
router.get("/", bankController.index);
router.put("/:id", userMiddleware.checkAuth, bankController.update);
router.delete("/:id", userMiddleware.checkAuth, bankController.destroy);

module.exports = router;
