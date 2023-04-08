const jwt = require('jsonwebtoken');
const UnautorizedError = require('../utils/UnautorizedError');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  // const { jwtToken } = req.cookies;
  if (!authorization) {
    return next(new UnautorizedError('Необходима авторизация'));
  }
  const token = authorization.split('Bearer ')[1];
  let payload;

  try {
    payload = jwt.verify(token, 'secret_key');
  } catch (err) {
    return next(new UnautorizedError('Необходима авторизация'));
  }

  req.user = payload;
  next();
};
