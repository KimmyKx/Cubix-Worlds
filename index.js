require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./src/modules/utils/routes')
const PORT = process.env.PORT || 5500;

app.use(express.static('src/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', 'src/public/views')

app.use(routes)

app.listen(PORT, () => console.log(`Running server on port ${PORT}`));