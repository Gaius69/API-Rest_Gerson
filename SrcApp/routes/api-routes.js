const express = require('express');

const apiControllers = require('../controllers/api-controllers');

const router = express.Router();

router.get('/:aid', apiControllers.getApiById);

router.get('/user/:uid', apiControllers.getApiByUserId);

router.post('/', apiControllers.createApi);

router.patch('/:pid', apiControllers.updateApi);

router.delete('/:pid', apiControllers.deleteApi);

module.exports = router;



