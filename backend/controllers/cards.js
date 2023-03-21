const Card = require('../models/card');
const NotFoundError = require('../utils/NotFoundError');
const BadRequestError = require('../utils/BadRequestError');
const ForbiddenError = require('../utils/ForbiddenError');

const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(201).send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(`Переданы некорректные данные при создании карточки: ${err.message}`));
      } else next(err);
    });
};

const deleteCard = (req, res, next) => {
  const { cardId } = req.params;
  Card.findById(cardId)
    .orFail(() => {
      throw new NotFoundError('Передан несуществующий id карточки');
    })
    .then((card) => {
      if (req.user._id !== card.owner.toString()) {
        throw new ForbiddenError('Попытка удалить не свою карточку');
      } Card.findByIdAndRemove(cardId)
        .then((cards) => res.send({ data: cards }))
        .catch(next);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Некорректно передан id карточки'));
      } else next(err);
    });
};

const likeCard = (req, res, next) => {
  const { cardId } = req.params;
  Card.findByIdAndUpdate(
    cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .populate(['likes', 'owner'])
    .orFail(() => {
      throw new NotFoundError('Карточка не существует');
    })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(`Введены некорректные данные: ${err.message}`));
      } else if (err.name === 'CastError') {
        next(new BadRequestError('Некорректно передан id карточки'));
      } else next(err);
    });
};

const dislikeCard = (req, res, next) => {
  const { cardId } = req.params;
  Card.findByIdAndUpdate(
    cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .populate(['likes', 'owner'])
    .orFail(() => {
      throw new NotFoundError('Карточка не существует');
    })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(`Введены некорректные данные: ${err.message}`));
      } else if (err.name === 'CastError') {
        next(new BadRequestError('Некорректно передан id карточки'));
      } else next(err);
    });
};

module.exports = {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
};
