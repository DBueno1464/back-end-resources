const path = require("path");
const express = require('express');
const session = require('express-session');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection.js');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'frontend kitty',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000, secure: true },
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(PORT, function () {
    console.log(`App is running on: http://localhost:${PORT}`);
    sequelize.sync({ force: false });
});