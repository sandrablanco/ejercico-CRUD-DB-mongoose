const express = require("express");
const taskRouter = require("./task");
const router = express.Router();

router.use("/task",taskRouter);



module.exports = router;
