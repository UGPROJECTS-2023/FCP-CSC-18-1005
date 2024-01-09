const models = require("../models");
const uuidv4 = require("uuid/v4");
const jwt = require("jsonwebtoken");
const {
  randomCode,
  sendEMail,
  appName
} = require("../config/constant");
const create =  async(req, res)=> {
  let pin = randomCode();
  const report = {
    reference: pin,
    description: req.body.description,
    departVerify: "NO",
    securityVerify: "NO",
    docVerify:"0",
    CourtDocVerify:"0",
    evidenceVerify:"NO",
    pliceDoc: "",
    courtDoc:"",
    status: "created",
    paymentStatus: "NOT PAID",
    productionStatus: "NO",
    collectStatus: "NO",
    studentId: req.body.studentId,
    userId: req.body.userId,

  };
  models.Report.create(report)
    .then(async(result) => {
      const studentId = result.studentId;
      const studentResult = await models.Student.findOne({ where: { id: studentId } });
  
      if (!studentResult) {
        return res.status(404).json({
          message: "Student not found",
          success: false,
        });
      }
      const email = studentResult.email;
      const mailMessage = `Hello ${studentResult.name}, your report of lost of ID Card with the reference ID of ${result.reference} has been submitted successful. View your report with the above reference and continue with the reisuance of your lost ID Card. Thank you`;
  
      sendEMail(email, `${appName} Report Of Lost Of ID Card`, mailMessage);
  
      res.status(200).json({
        message: "Report created Successfully",
        success: true,
        data: result,
        email:mailMessage,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong..",
      });
    });
}
function getByReference(req, res) {
  const reference = req.query.reference;

  if (!reference) {
    return res.status(400).json({
      message: "Reference parameter is required",
      success: false,
    });
  }

  models.Report.findOne({ where: { reference: reference } })
    .then((report) => {
      if (!report) {
        return res.status(404).json({
          message: "Report not found",
          success: false,
        });
      }

      const studentId = report.studentId;
      const userId = report.UserId;

      // Fetch both student and user by their respective IDs concurrently
      const studentPromise = models.Student.findByPk(studentId);
      const userPromise = models.User.findByPk(userId);

      return Promise.all([studentPromise, userPromise])
        .then(([student, user]) => {
          // Update the report object with student and user details
          report.dataValues.student = student;
          report.dataValues.user = user;
          return report;
        });
    })
    .then((reportWithDetails) => {
      res.status(200).json({ report: reportWithDetails, success: true });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
        error: error.message,
      });
    });
}


const getById = async(req, res) => {
  const id = req.params.id;
  models.Report.findByPk(id)
    .then(async(result) => {
      if (result) {
        const studentId = result.studentId;
      const studentResult = await models.Student.findOne({ where: { id: studentId } });
  
      if (!studentResult) {
        return res.status(404).json({
          message: "Student not found",
          success: false,
        });
      }
        res.status(200).json({ user: result, student:studentResult, success: true });
      } else {
        res.status(404).json({
          message: "Report not found",
          success: false,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "something went wrong!",
      });
    });
}

function index(req, res) {
  models.Report.findAll()
    .then((reports) => {
      const reportPromises = reports.map(report => {
        const studentId = report.studentId;
        const userId = report.UserId;

        // Fetch both student and user by their respective IDs concurrently
        const studentPromise = models.Student.findByPk(studentId);
        const userPromise = models.User.findByPk(userId);

        return Promise.all([studentPromise, userPromise])
          .then(([student, user]) => {
            // Update the report object with student and user details
            report.dataValues.student = student;
            report.dataValues.user = user;
            return report;
          });
      });

      // Resolve all promises
      return Promise.all(reportPromises);
    })
    .then((reportsWithDetails) => {
      res.status(200).json({ reports: reportsWithDetails, success: true });
    })
    .catch((error) => {
      res.status(500).json({
        message: "something went wrong!",
        error: error.message,
      });
    });
}

function getByProduction(req, res) {
  models.Report.findAll( { where: { paymentStatus:"PAID", collectStatus:"NO" } })
    .then((reports) => {
      const reportPromises = reports.map(report => {
        const studentId = report.studentId;
        const userId = report.UserId;

        // Fetch both student and user by their respective IDs concurrently
        const studentPromise = models.Student.findByPk(studentId);
        const userPromise = models.User.findByPk(userId);

        return Promise.all([studentPromise, userPromise])
          .then(([student, user]) => {
            // Update the report object with student and user details
            report.dataValues.student = student;
            report.dataValues.user = user;
            return report;
          });
      });

      // Resolve all promises
      return Promise.all(reportPromises);
    })
    .then((reportsWithDetails) => {
      res.status(200).json({ reports: reportsWithDetails, success: true });
    })
    .catch((error) => {
      res.status(500).json({
        message: "something went wrong!",
        error: error.message,
      });
    });
}
function getByCollection(req, res) {
  models.Report.findAll({ where: { collectStatus:"YES" } })
    .then((reports) => {
      const reportPromises = reports.map(report => {
        const studentId = report.studentId;
        const userId = report.UserId;

        // Fetch both student and user by their respective IDs concurrently
        const studentPromise = models.Student.findByPk(studentId);
        const userPromise = models.User.findByPk(userId);

        return Promise.all([studentPromise, userPromise])
          .then(([student, user]) => {
            // Update the report object with student and user details
            report.dataValues.student = student;
            report.dataValues.user = user;
            return report;
          });
      });

      // Resolve all promises
      return Promise.all(reportPromises);
    })
    .then((reportsWithDetails) => {
      res.status(200).json({ reports: reportsWithDetails, success: true });
    })
    .catch((error) => {
      res.status(500).json({
        message: "something went wrong!",
        error: error.message,
      });
    });
}
function destroy(req, res) {
  const id = req.params.id;

  models.Report.destroy({ where: { id: id } })
    .then((result) => {
      if (result > 0) {
        // Check if any rows were affected (user deleted)
        res.status(200).json({
          message: "Report deleted successfully",
        });
      } else {
        // No rows affected, user with the specified ID not found
        res.status(404).json({
          message: "Report not found",
        });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        message: "Something went wrong",
        error: error.message, // Provide more information about the error
      });
    });
}

function uploadPoliceDoc(req, res) {
   const id = req.params.id;
    models.Report.update({ pliceDoc: req.file.filename, docVerify:"1"}, { where: { id: id } })
      .then((result) => {
        res.status(200).json({
          message: "Document uploaded..!",
          success: true,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: "Something went wrong",
          error: error,
          success: false,
        });
      });
  }

function uploadCourtDoc (req, res) {
   const id = req.params.id;
    models.Report.update({ courtDoc:req.file.filename, CourtDocVerify:"1"}, { where: { id: id } })
      .then((result) => {
        res.status(200).json({
          message: "Document uploaded..!",
          result,
          success: true,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: "Something went wrong",
          error: error,
          success: false,
        });
      });
  }
  const securityVerify = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await models.Report.findByPk(id);
  
      if (!result) {
        return res.status(404).json({
          message: "Report not found",
          success: false,
        });
      }
  
      const studentId = result.studentId;
      const studentResult = await models.Student.findOne({ where: { id: studentId } });
  
      if (!studentResult) {
        return res.status(404).json({
          message: "Student not found",
          success: false,
        });
      }
      if (!req.headers.authorization) {
        return res.status(401).json({
          message: "Invalid token",
          success: false,
        });
      }
  
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decodedToken.id)
      const email = studentResult.email;
      const mailMessage = `Hello ${studentResult.name}, the Security Division has verified your identity. Please kindly print the Loss of Identity Card document and proceed to the police and court to get the police report and court report.`;
  
      sendEMail(email, `${appName} Security Division Verification`, mailMessage);
  
      const verify = req.body.securityVerify;
  
      const updatedReport = await models.Report.update(
        { securityVerify: verify, userId: decodedToken.id },
        { where: { id: id } }
      );
  
      res.status(200).json({
        message: "Student Verified!",
        data: {
          studentData: studentResult,
          reportData: updatedReport,
          
        },
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error: error.message,
        success: false,
      });
    }
  };

  const updateProductionStatus = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await models.Report.findByPk(id);
  
      if (!result) {
        return res.status(404).json({
          message: "Report not found",
          success: false,
        });
      }
  
      const studentId = result.studentId;
      const studentResult = await models.Student.findOne({ where: { id: studentId } });
  
      if (!studentResult) {
        return res.status(404).json({
          message: "Student not found",
          success: false,
        });
      }
      if (!req.headers.authorization) {
        return res.status(401).json({
          message: "Invalid token",
          success: false,
        });
      }
  
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decodedToken.id)
      const email = studentResult.email;
      const mailMessage = `Hello ${studentResult.name}, Your Reissued ID Card is produced. Kindly go to the security Division to collect your ID Card.`;
  
      sendEMail(email, `${appName} ID Card Produced`, mailMessage);
  
      const verify = req.body.productionStatus;
  
      const updatedReport = await models.Report.update(
        { productionStatus: verify, userId: decodedToken.id },
        { where: { id: id } }
      );
  
      res.status(200).json({
        message: "ID Card Produced!",
        data: {
          studentData: studentResult,
          reportData: updatedReport,
          
        },
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error: error.message,
        success: false,
      });
    }
  };
  const updatePaymentStatus = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await models.Report.findByPk(id);
  
      if (!result) {
        return res.status(404).json({
          message: "Report not found",
          success: false,
        });
      }
  
      const studentId = result.studentId;
      const studentResult = await models.Student.findOne({ where: { id: studentId } });
  
      if (!studentResult) {
        return res.status(404).json({
          message: "Student not found",
          success: false,
        });
      }
      if (!req.headers.authorization) {
        return res.status(401).json({
          message: "Invalid token",
          success: false,
        });
      }
  
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decodedToken.id)
      const email = studentResult.email;
      const mailMessage = `Hello ${studentResult.name}, this is to notify your that you payment for ID Card re-issued is successfully, kindly wait patiently as you new ID Card is under production.`;
  
      sendEMail(email, `${appName} Notification Of Payment`, mailMessage);
  
      const verify = req.body.paymentStatus;
  
      const updatedReport = await models.Report.update(
        { paymentStatus: verify, userId: decodedToken.id },
        { where: { id: id } }
      );
  
      res.status(200).json({
        message: "Payment Verified!",
        data: {
          studentData: studentResult,
          reportData: updatedReport,
          
        },
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error: error.message,
        success: false,
      });
    }
  };
  const updateCollectionStatus = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await models.Report.findByPk(id);
  
      if (!result) {
        return res.status(404).json({
          message: "Report not found",
          success: false,
        });
      }
  
      const studentId = result.studentId;
      const studentResult = await models.Student.findOne({ where: { id: studentId } });
  
      if (!studentResult) {
        return res.status(404).json({
          message: "Student not found",
          success: false,
        });
      }
      if (!req.headers.authorization) {
        return res.status(401).json({
          message: "Invalid token",
          success: false,
        });
      }
  
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decodedToken.id)
      const email = studentResult.email;
      const mailMessage = `Hello ${studentResult.name}, this is to notify you that you have collected your re-issued ID Card. so take care of it and don't lost it again! Thank you!`;
  
      sendEMail(email, `${appName} Notification of ID Card Collection`, mailMessage);
  
      const verify = req.body.collectStatus;
  
      const updatedReport = await models.Report.update(
        { collectStatus: verify, userId: decodedToken.id },
        { where: { id: id } }
      );
  
      res.status(200).json({
        message: "ID Card Collected!",
        data: {
          studentData: studentResult,
          reportData: updatedReport,
          
        },
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error: error.message,
        success: false,
      });
    }
  };
  const updateEvidenceStatus = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await models.Report.findByPk(id);
  
      if (!result) {
        return res.status(404).json({
          message: "Report not found",
          success: false,
        });
      }
  
      const studentId = result.studentId;
      const studentResult = await models.Student.findOne({ where: { id: studentId } });
  
      if (!studentResult) {
        return res.status(404).json({
          message: "Student not found",
          success: false,
        });
      }
      if (!req.headers.authorization) {
        return res.status(401).json({
          message: "Invalid token",
          success: false,
        });
      }
  
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decodedToken.id)
      const email = studentResult.email;
      const mailMessage = `Hello ${studentResult.name}, this is to notify you that the document you uploaded are verified, kindly print your Evidence slip for identification purpose.`;
  
      sendEMail(email, `${appName} Notification of Document Verification`, mailMessage);
  
      const verify = req.body.evidenceVerify;
  
      const updatedReport = await models.Report.update(
        { evidenceVerify: verify, userId: decodedToken.id },
        { where: { id: id } }
      );
  
      res.status(200).json({
        message: "Document Verified!",
        data: {
          studentData: studentResult,
          reportData: updatedReport,
          
        },
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error: error.message,
        success: false,
      });
    }
  };
module.exports = {
  create: create,
  index: index,
  getByProduction:getByProduction,
  getByCollection:getByCollection,
  getByReference:getByReference,
  getById: getById,
  destroy: destroy,
  uploadPoliceDoc: uploadPoliceDoc,
  uploadCourtDoc: uploadCourtDoc,
  securityVerify:securityVerify,
  updateProductionStatus:updateProductionStatus,
  updatePaymentStatus:updatePaymentStatus,
  updateCollectionStatus:updateCollectionStatus,
  updateEvidenceStatus:updateEvidenceStatus,
};
