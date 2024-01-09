const models = require("../models");
  
function create(req, res) {

  models.Department.findOne({
    where: { name: req.body.name },
  })
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Department already exists!",
        });
      } else {
            const department = {
              name: req.body.name,
              facultyId: req.body.facultyId,
              
            };
            models.Department.create(department)
              .then((result) => {
                res.status(200).json({
                  message: "Department created Successfully",
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
  models.Department.findByPk(id)
    .then((result) => {
      if (result) {
       
        res.status(200).json({ user: result, success: true });
      } else {
        res.status(404).json({
          message: "Department not found",
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
  models.Department.findAll()
    .then((departments) => {
      const departmentData = [];

      // Iterating through each department to fetch its corresponding faculty
      Promise.all(
        departments.map((department) => {
          const facultyId = department.facultyId;

          // Fetching the faculty for the current department
          return models.Faculty.findByPk(facultyId)
            .then((facultyResult) => {
              if (facultyResult) {
                // Pushing department details along with its faculty to departmentData array
                departmentData.push({
                  department: department,
                  faculty: facultyResult,
                });
              } else {
                // If faculty not found for a department
                departmentData.push({
                  department: department,
                  faculty: null,
                });
              }
            })
            .catch((error) => {
              throw error;
            });
        })
      )
        .then(() => {
          res.status(200).json({
            success: true,
            data: departmentData,
            message: "Departments fetched successfully with corresponding faculties",
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

function update(req, res) {
  const id = req.params.id;
  const updatedDept = {
    name: req.body.name,
    facultyId: req.body.facultyId,
  };

  models.Department.update(updatedDept, { where: { id: id } })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Student updated successfully",
        updatedStudent,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "something went wrong",
        error: error,
      });
    });
}

function destroy(req, res) {
  const id = req.params.id;

  models.Department.destroy({ where: { id: id } })
    .then((result) => {
      if (result > 0) {
        // Check if any rows were affected (user deleted)
        res.status(200).json({
          message: "Department deleted successfully",
        });
      } else {
        // No rows affected, user with the specified ID not found
        res.status(404).json({
          message: "Department not found",
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
  create: create,
  index: index,
  getById: getById,
  update: update,
  destroy: destroy,
};
