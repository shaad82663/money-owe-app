const express = require('express');
const router = express.Router();

const {newUser, owns} = require('../controllers/user');

router.route('/new-user').post(newUser);
router.route('/owes').post(owns);

module.exports = router;