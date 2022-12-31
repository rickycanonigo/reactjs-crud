const express = require('express');
const router = express.Router();
const User = require('../../controllers/userController');

router.get('/get', User.get);
router.get('/get/:id', User.details);
router.post('/delete', User.delete);
router.post('/register-user', User.new);
router.put('/update', User.update);

module.exports = router;