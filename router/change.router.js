const router = require('express').Router();
const { Route } = require('../db/models');



router.route('/:id')
  .get((req, res) => {
    res.render('changeForm');
  })
  .put(async (req, res) => {

    const id = req.params.id;

    const name = req.body.routeName;
    const desc = req.body.routeDesc;
    const cord1 = req.body.routeCord1;
    const cord2 = req.body.routeCord2;

    let route;

    try {
      route = await Route.update(
        {
          name,
          description: desc,
          coordinates_1: cord1,
          coordinates_2: cord2
        },
        {
          where: {
            id: id
          }
        }
      )
      res.json({ message: 'All is OK', changeRoute: true, route });
    }
    catch {
      res.json({ message: 'Route edition failed', changeRoute: false, route });
    }


  })

module.exports = router;
