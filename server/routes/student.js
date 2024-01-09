const express = require("express");
const studentController = require("../controllers/student.controller");
const AdminMiddleware = require("../middleware/admin-auth");
const router = express.Router();


router.post("/", AdminMiddleware.isAdmin, studentController.createStudent);
router.get("/student", studentController.getByRegNo);
router.get("/:id", studentController.getById);
router.get("/", studentController.index);
router.delete("/:id", AdminMiddleware.isAdmin, studentController.destroy);

module.exports = router;
