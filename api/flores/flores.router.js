const { get } = require("./flores.controller");
const router = require("express").Router();

router.get("/",get);

module.exports = router;