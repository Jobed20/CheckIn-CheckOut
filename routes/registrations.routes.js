const express = require("express");

const {
  getAllRegistrations,
  getRegistrationById,
  createRegistration,
  updateRegistration,
  deleteRegistration,
} = require("../controllers/registrations.controller");

const {
  registrationExists,
} = require("../middlewares/registrations.middlewares");

const registrationRouter = express.Router();

registrationRouter.get("/", getAllRegistrations);

registrationRouter.get("/:id", registrationExists, getRegistrationById);

registrationRouter.post("/", createRegistration);

registrationRouter.patch("/:id", registrationExists, updateRegistration);

registrationRouter.delete("/:id", registrationExists, deleteRegistration);

module.exports = {registrationRouter};
