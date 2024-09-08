const { get, post } = require("./flores.controller");
const router = require("express").Router();

router.get("/", get);
router.post("/", post);

module.exports = router;