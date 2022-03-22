const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const { engine } = require('express-handlebars');
const req = require('express/lib/request');
const mongoose = require('mongoose');
const db = require('./config/db');
const route = require('./routes');
const methodOverride = require('method-override');

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

db.connect();

route(app);

app.engine(
    'handlebars',
    engine({
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'resources', 'views'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
