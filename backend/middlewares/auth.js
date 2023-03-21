const jwt = require('jsonwebtoken');
const UnautorizedError = require('../utils/UnautorizedError');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { jwtToken } = req.cookies;

  if (!jwtToken) {
    next(new UnautorizedError('Необходима авторизация'));
    return;
  }

  const token = jwtToken;
  let payload;

  try {
    payload = jwt.verify(token, 'secret_key');
  } catch (err) {
    next(new UnautorizedError('Необходима авторизация'));
    return;
  }

  req.user = payload;
  next();
};
