const router = require('express').Router();
const { Route } = require('../db/models');
const { Op } = require('sequelize');


router.route('/')

.get((req, res)=> {
  res.render('createRoute')
})

.post(async (req, res) => {
  const name = req.body.nameRoute;
  const description = req.body.description;
  const coordinates = req.body.coordinates;
  const userID = req.session.user.id;
  // console.log(req.body);
  // console.log(req.session.user.id);
  let newRoute; 
  const checkRoute = await Route.findOne({
    where: {
      [Op.or]: [
        {name}
      ],
    },
  });
if (!checkRoute) {
  newRoute = Route.create({
    name,
    description,
    coordinates, 
    userID,
  });
} else {
  res.json({ createRoute: false, message: 'Такой маршрута уже зарегистрирован' }); // createRoute допилить логику
} 
if (newRoute) {
  res.json({ createRoute: true, message: 'Успешное добавление' });
} else {
  res.json({ createRoute: false, message: 'Не добавлен!' });
}
});

module.exports = router;
