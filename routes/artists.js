const express = require('express')
const Artist = require('../models/artist.js')

const artistsRouter = express.Router() //builds an app in our express app

artistsRouter.get('/new', (req, res) =>{
	Artist.find({}, function(err, artists) {
		res.render('artists/new')
	})
})

artistsRouter.post('/new', function(req, res) {
	// console.log('HERE!!!!!!!!!!!!!!!!!!!!')
	const newArtist = new Artist({
		image: req.body.url,
		name: req.body.name,
		genre: req.body.genre,
		summary: req.body.summary,
		albums: req.body.albums,
		songs: req.body.songs
	})
	newArtist.save()
	res.redirect('/')
})

artistsRouter.get('/:id', (req, res) => {
	Artist.findOne({ '_id': req.params.id}, (err, artists) => {
		res.render('artists/show', artists)
	})
})

module.exports = artistsRouter