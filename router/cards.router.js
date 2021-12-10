const router = require('express').Router();
const { Route } = require('../db/models');

router.get('/', async (req, res) => {
  const allCards = await Route.findAll({
    raw: true,
  });
  res.render('cards', { allCards });
  // res.render('cards');
})

router.post('/add/:id', async (req, res) => {
  const cardId = req.params.id;
  console.log((cardId));
  const userId = req.session.user.id;
  console.log(userId);
  let cardAdd
  try {
  cardAdd = await Route.findOne({
    where: {
      id: cardId,
    },
  });
  console.log(cardAdd);
} catch {
  res.json({ message: 'Что-то пошло не так!', thisCard: false });
}
  const newCard = await Route.create({
    name: cardAdd.name,
    description: cardAdd.description,
    coordinates_1: cardAdd.coordinates_1,
    coordinates_2: cardAdd.coordinates_2,
    userID: userId,
  });
  if (newCard) {
    res.json( { thisCard: true, message: 'Маршрут добавлен!' });
  } else {
    res.json({ thisCard: false, message: 'Не удалось добавить карточку!' })
  }
});

module.exports = router;
