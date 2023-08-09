require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');

const { sequelize } = require('../db/models');

const app = express();

const indexRoutes = require('./routes/indexRoutes');
const mainPageRoutes = require('./routes/mainPageRoutes');
const renderFormRoutes = require('./routes/signUpRoutes');
const loginRoutes = require('./routes/loginRoutes');
const formRoutes = require('./routes/recipeRoutes');
const mealPlanRoutes = require('./routes/mealPlanRoutes');
const jounalRoutes = require('./routes/journalRoutes');
const renderRecepies = require('./routes/usersRecepiesRoutes');
const newRecipeRoutes = require('./routes/formRoutes');
const manageRoutes = require('./routes/manageRoutes');
const botRoutes = require('./routes/botRoutes')

app.use(morgan('dev'));
// Чтобы наши статические файлы были видны браузеру, мы должны их подключить
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Выносим порт в .env и на всякий случай подставляем дефолтный через ||
const { PORT, SESSION_SECRET } = process.env;

const sessionConfig = {
  name: 'your coockie name', // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET ?? 'secr', // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
    httpOnly: true, // * куки только по http
  },
};

const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin(origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

app.use(session(sessionConfig));

app.use('/', indexRoutes);
app.use('/home', mainPageRoutes);
app.use('/register', renderFormRoutes);
app.use('/login', loginRoutes);
app.use('/recipe', formRoutes);
app.use('/plan', mealPlanRoutes);
app.use('/journal', jounalRoutes);
app.use('/usersrecepies', renderRecepies);
app.use('/usersrecepies', newRecipeRoutes);
app.use('/journal', manageRoutes);
app.use('/answer', botRoutes)

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
