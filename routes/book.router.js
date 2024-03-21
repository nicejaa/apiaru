const express = require("express");
const router = express.Router();

const bookController = require("../controllers/book.controller");

router.get("/getAll", bookController.getAll);
router.get("/detail/:id", bookController.getById);
router.post("/add", bookController.create);
router.put("/update", bookController.updateById);
router.delete("/delete", bookController.deleteById);

module.exports = router;
