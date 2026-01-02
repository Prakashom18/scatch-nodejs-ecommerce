const express = require('express');
const router = express.Router();

const { registerUser } = require('../controllers/authoController');

router.get('/', (req, res) => {
    res.send('user');
});

router.post('/register', registerUser);

module.exports = router;
