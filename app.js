const express = require('express');
const path = require('path');
const morgan = require('morgan');
const regRouter = require('./router/registration.router');
const logoutRouter = require('./router/logout.router')
const auth = require('./router/authentication.router')
const map = require('./router/map')
const changeRouter = require('./router/change.router')

const cardRouter = require('./router/createCard.router'); // VITYA
const deleteRouter = require('./router/delete.router');
const allCards = require('./router/cards.router')
const user_pageRouter = require('./router/user_page.router');
const addRouter = require('./router/addRoute.router')


//dasha
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const sessionMiddleware = require('./middleware/session');
const req = require('express/lib/request');





const PORT = process.env.PORT || 3000;

const app = express();
//dasha
app.use(cookieParser());
const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid',  // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'I LOVE CATS', // Секретное слово для шифрования, может быть любым
  resave: false,  // Пересохранять ли куку при каждом запросе
  saveUninitialized: false,  // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true,  // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(session(sessionConfig));
app.use(morgan('dev'));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // VITYA

app.use(sessionMiddleware);

app.get('/', (req, res) => {
  res.render('index');
});


app.use('/createRoute', cardRouter); //
app.use('/addrouter', addRouter)
app.use('/user', deleteRouter);
app.use('/cards', allCards)

app.use('/registration', regRouter);
app.use('/authentication', auth)
app.use('/logout', logoutRouter);

app.use('/', map);
app.use('/changeForm', changeRouter)
app.use('/user', user_pageRouter)

app.listen(PORT, () => {
  console.log('Server has been shurshed epte', PORT);
});
