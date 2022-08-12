const express = require('express');
const router = express.Router();

const bookController = require('../controller/book.controller')

router.get('/book/list', bookController.get_list)
router.get('/book/list/detail/:id', bookController.detail)

module.exprots = router

