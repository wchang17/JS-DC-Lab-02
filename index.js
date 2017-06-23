const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const mongoose = require('mongoose')

mongoose.connect('mongodb://admin:admin@pokedex-shard-00-00-emqy4.mongodb.net:27017,pokedex-shard-00-01-emqy4.mongodb.net:27017,pokedex-shard-00-02-emqy4.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=pokedex-shard-0&authSource=admin')

const Artist = require('./models/artist.js')
const appRoutes = require('./routes/index.js')
const artistsRouter = require('./routes/artists.js')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use('/', appRoutes)
app.use('/artist', artistsRouter)


app.listen(3000)