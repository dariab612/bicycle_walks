const express = require('express');
const path = require('path');
const morgan = require('morgan');
const regRouter = require('./router/registration.router');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/registration', regRouter);

app.listen(PORT, () => {
  console.log('Server has been shurshed epte', PORT);
});
