const express = require("express");
const departmentController = require("../controllers/department.controller");
const AdminMiddleware = require("../middleware/admin-auth");
const router = express.Router();

router.post("/", AdminMiddleware.isAdmin, departmentController.create);
router.put("/", AdminMiddleware.isAdmin, departmentController.update);
router.get("/:id", departmentController.getById);
router.get("/", departmentController.index);
router.delete("/:id", AdminMiddleware.isAdmin, departmentController.destroy);

module.exports = router;
