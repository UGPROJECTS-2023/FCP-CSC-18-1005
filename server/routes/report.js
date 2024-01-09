const express = require("express");
const reportController = require("../controllers/report.controller");
const AdminMiddleware = require("../middleware/admin-auth");
const checkAuthMiddleware = require("../middleware/check-auth");
const upload = require("../middleware/uploadMiddleware");
const router = express.Router();

router.post(
  "/create",
  reportController.create
);
router.get("/production", reportController.getByProduction);
router.get("/collection", reportController.getByCollection);
router.get("/student-report", reportController.getByReference);

router.get("/:id", reportController.getById);
router.get("/", reportController.index);

router.put(
  "/upload-police/:id",upload.single("pliceDoc"),
  reportController.uploadPoliceDoc
);
router.put(
  "/upload-court/:id",upload.single("courtDoc"),
  reportController.uploadCourtDoc
);
router.put(
  "/security-verify/:id", checkAuthMiddleware.checkAuth,
  reportController.securityVerify
);
router.put(
  "/update-production/:id", checkAuthMiddleware.checkAuth,
  reportController.updateProductionStatus
);
router.put(
  "/update-payment/:id", checkAuthMiddleware.checkAuth,
  reportController.updatePaymentStatus
);
router.put(
  "/update-collect/:id", checkAuthMiddleware.checkAuth,
  reportController.updateCollectionStatus
);
router.put(
  "/update-evidence/:id", checkAuthMiddleware.checkAuth,
  reportController.updateEvidenceStatus
);
router.delete("/:id", AdminMiddleware.isAdmin, reportController.destroy);

module.exports = router;
