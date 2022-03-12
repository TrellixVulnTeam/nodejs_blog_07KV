const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const { engine } = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'))
app.engine('hdb', engine({
  extname: ".hdb"
}));
app.set('view engine', 'hdb');
app.set('views',path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
  res.render('home');
});

app.get('/new', (req, res) => {
  res.render('new');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})