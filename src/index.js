const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const { engine } = require('express-handlebars');
const req = require('express/lib/request');

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

route(app);

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// app.use(morgan('combined'))
app.engine(
    'hdb',
    engine({
        extname: '.hdb',
    }),
);
app.set('view engine', 'hdb');

app.set('views', path.join(__dirname, 'resources/views'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
