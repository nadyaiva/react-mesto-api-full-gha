const bcrypt = require('bcryptjs/dist/bcrypt');
const mongoose = require('mongoose');
const validator = require('validator');
const UnautorizedError = require('../utils/UnautorizedError');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Жак-Ив Кусто',
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    default: 'Исследователь',
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    type: String,
    validate: {
      validator: (link) => { validator.isURL(link); },
      message: 'Неккоректная ссылка на картинку',
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Неправильный формат email',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

// eslint-disable-next-line func-names
userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnautorizedError('Неправильные почта'));
      }
      return bcrypt.compare(password, user.password)
        .then((isMatched) => {
          if (!isMatched) {
            return Promise.reject(new UnautorizedError('Неправильный пароль'));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
