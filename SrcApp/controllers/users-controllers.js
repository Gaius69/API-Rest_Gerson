const uuid = require('uuid/v4');

const Error = require('../models/error');

const GERSON_USERS = [
  {
    id: 'u1',
    name: 'Gerson',
    email: 'email',
    password: 'password'
  }
];

const getUsers = (req, res, next) => {
  res.json({ users: GERSON_USERS });
};

const signup = (req, res, next) => {
  const { name, email, password } = req.body;

  const hasUser = GERSON_USERS.find(u => u.email === email);
  if (hasUser) {
    throw new Error('Could not create user, email already exists.', 422);
  }

  const createdUser = {
    id: uuid(),
    name, // name: name
    email,
    password
  };

  GERSON_USERS.push(createdUser);

  res.status(201).json({user: createdUser});
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = GERSON_USERS.find(u => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    throw new Error('Could not identify user, credentials seem to be wrong.', 401);
  }

  res.json({message: 'Logged in!'});
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
