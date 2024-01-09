const models = require("../models");
  
function create(req, res) {

  models.Level.findOne({
    where: { name: req.body.name },
  })
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Level already exists!",
        });
      } else {
            const level = {
              name: req.body.name,
              code: req.body.code,
              
            };
            models.Level.create(level)
              .then((result) => {
                res.status(200).json({
                  message: "Level created Successfully",
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
  models.Level.findByPk(id)
    .then((result) => {
      if (result) {
        res.status(200).json({ data: result, success: true });
      } else {
        res.status(404).json({
          message: "Level not found",
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
  models.Level.findAll()
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
        message: "level fetched",
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

  models.Level.destroy({ where: { id: id } })
    .then((result) => {
      if (result > 0) {
        // Check if any rows were affected (user deleted)
        res.status(200).json({
          message: "User deleted successfully",
        });
      } else {
        // No rows affected, user with the specified ID not found
        res.status(404).json({
          message: "Level not found",
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
