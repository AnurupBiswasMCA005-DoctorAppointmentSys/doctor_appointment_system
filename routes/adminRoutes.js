const express = require("express");
const { getAllUsersController, 
        getAllDoctorsController, 
        changeAccountStatusController
    } = require("../controller/adminCtrl");
const authMiddleware = require("../middlewares/authMiddleware");


const router = express.Router();

//GET METHOD || USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET METHOD || DOCTORS
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//POST ACCOUNT STATUS
router.post(
    "/changeAccountStatus",
    authMiddleware,
    changeAccountStatusController
  );

module.exports = router;