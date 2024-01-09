const express = require("express");
const facultyController = require("../controllers/faculty.controller");
const AdminMiddleware = require("../middleware/admin-auth");
const router = express.Router();

router.post("/", AdminMiddleware.isAdmin, facultyController.create);
router.get("/:id", facultyController.getById);
router.get("/", facultyController.index);
router.delete("/:id", AdminMiddleware.isAdmin, facultyController.destroy);

module.exports = router;
