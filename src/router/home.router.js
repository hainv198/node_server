
const express = require('express');
const router = express.Router();

const homeController = require('../controller/home.controler')

router.get('/api', homeController.api)
router.get('/api/detail/:id', homeController.detail)

module.exports = router