const express = require("express");
const levelController = require("../controllers/level.controller");
const AdminMiddleware = require("../middleware/admin-auth");
const router = express.Router();

router.post("/", AdminMiddleware.isAdmin, levelController.create);
router.get("/:id", levelController.getById);
router.get("/", levelController.index);
router.delete("/:id", AdminMiddleware.isAdmin, levelController.destroy);

module.exports = router;
