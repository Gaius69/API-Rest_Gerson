const Error = require('../models/error');

const getApiById = (req, res, next) => {
    const apiId = req.params.aid; // { aid: 'a1}
}

// function getApiById() { ... }
// const getApiById = function() { ... }

const getApiByUserId = (req, res, next) => {
    const userId = req.params.uid;
}

if (!place) {
    return next(
        new Error('could not find an api for the provided user id', 404)
    );
}

res.json({ api });