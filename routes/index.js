const express = require('express')
const Artist = require('../models/artist.js')

const appRouter = express.Router() //builds an app in our express app

appRouter.get('/', (req, res) =>{
	Artist.find({}, function(err, artists) {
		res.render('index', {artists})
	})
})

module.exports = appRouter