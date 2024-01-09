const express = require("express");
const branchController = require("../controllers/branch.controller");
const userMiddleware = require("../middleware/check-auth");
const router = express.Router();

router.post(
  "/create-branch",
  userMiddleware.checkAuth,
  branchController.createBranch
);
router.get("/bycode", branchController.byBusinessId);
router.get("/:id", branchController.show);
router.get("/", branchController.index);
router.put("/:id", userMiddleware.checkAuth, branchController.update);
router.delete("/:id", userMiddleware.checkAuth, branchController.destroy);

module.exports = router;
