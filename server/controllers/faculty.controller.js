const models = require("../models");
  
function create(req, res) {

  models.Faculty.findOne({
    where: { name: req.body.name },
  })
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Faculty already exists!",
        });
      } else {
            const faculty = {
              name: req.body.name,
            };
            models.Faculty.create(faculty)
              .then((result) => {
                res.status(200).json({
                  message: "Faculty created Successfully",
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
  models.Faculty.findByPk(id)
    .then((result) => {
      if (result) {
        res.status(200).json({ user: result, success: true });
      } else {
        res.status(404).json({
          message: "Faculty not found",
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
  models.Faculty.findAll()
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
        message: "faculty fetched",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "something went wrong!",
      });
    });
}
function destroy(req, res) {
  const id = req.params.id;

  models.Faculty.destroy({ where: { id: id } })
    .then((result) => {
      if (result > 0) {
        // Check if any rows were affected (user deleted)
        res.status(200).json({
          message: "User faculty successfully",
        });
      } else {
        // No rows affected, user with the specified ID not found
        res.status(404).json({
          message: "Faculty not found",
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
  destroy: destroy,
};
