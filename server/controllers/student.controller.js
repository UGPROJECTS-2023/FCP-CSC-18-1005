const models = require("../models");
  
function createStudent(req, res) {

  models.Student.findOne({
    where: { regNo: req?.body?.regNo },
  })
    .then((result) => {
      if (result) {
        res.status(500).json({
          message: "Student already exists!",
        });
      }else if(req.body ===""){
        res.status(500).json({
          message: "all field required!",
        });
      }

       else {
            const student = {
              name: req.body.name,
              email: req.body.email,
              phone: req.body.phone,
              blood:req.body.blood,
              level:req.body.level,
              departmentId:req.body.departmentId,
              regNo:req.body.regNo,
              facultyId:req.body.facultyId,
              address:req.body.address,
              nextKin:req.body.nextKin,
              dp:req.body.dp,
              
            };
            models.Student.create(student)
              .then((result) => {
                res.status(200).json({
                  message: "Student created Successfully",
                  success: true,
                  data: result,
                });
              })
              .catch((error) => {
                res.status(500).json({
                  message: "Something went wrong..",
                });
              });
          }
        })
    }  
function getById(req, res) {
  const id = req.params.id;
  models.Student.findByPk(id)
    .then((result) => {
      if (result) {
        res.status(200).json({ user: result, success: true });
      } else {
        res.status(404).json({
          message: "student not found",
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
function getByRegNo(req, res) {
  const regNo = req.query.regNo;
  const phone = req.query.phone;

  if (!regNo || !phone) {
    return res.status(400).json({
      message: "Both regNo and phone parameters are required",
      success: false,
    });
  }

  models.Student.findOne({ where: { regNo: regNo, phone: phone } })
    .then((result) => {
      if (result) {
        res.status(200).json({ user: result, success: true });
      } else {
        res.status(404).json({
          message: "Student not found",
          success: false,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

function index(req, res) {
  models.Student.findAll()
    .then((students) => {
      const studentData = [];

      // Iterate through each student to fetch their faculty and department details
      Promise.all(
        students.map((student) => {
          const facultyId = student.facultyId;
          const departmentId = student.departmentId;

          // Fetch faculty details
          const fetchFaculty = models.Faculty.findByPk(facultyId)
            .then((facultyResult) => {
              if (facultyResult) {
                return facultyResult; // Return the faculty details
              } else {
                return null;
              }
            })
            .catch((error) => {
              throw error;
            });

          // Fetch department details
          const fetchDepartment = models.Department.findByPk(departmentId)
            .then((departmentResult) => {
              if (departmentResult) {
                return departmentResult; // Return the department details
              } else {
                return null;
              }
            })
            .catch((error) => {
              throw error;
            });

          // Push student data along with faculty and department details to studentData array
          return Promise.all([fetchFaculty, fetchDepartment]).then(
            ([faculty, department]) => {
              studentData.push({
                student: student,
                faculty: faculty,
                department: department,
              });
            }
          );
        })
      )
        .then(() => {
          res.status(200).json({
            status: "success",
            data: studentData,
            message: "Data fetched successfully with faculty and department details",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "Something went wrong!",
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

function destroy(req, res) {
  const id = req.params.id;

  models.Student.destroy({ where: { id: id } })
    .then((result) => {
      if (result > 0) {
        // Check if any rows were affected (user deleted)
        res.status(200).json({
          message: "Delete deleted successfully",
        });
      } else {
        // No rows affected, user with the specified ID not found
        res.status(404).json({
          message: "Delete not found",
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

module.exports = {
  createStudent: createStudent,
  index: index,
  getById: getById,
  getByRegNo:getByRegNo,
  destroy: destroy,
};
