const express = require('express')
const Artist = require('../models/artist.js')
const Comment = require('../models/comment.js')

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

//shows single artist page
artistsRouter.get('/:id', (req, res) => {
	Artist.findOne({ '_id': req.params.id}, (err, artists) => {
		res.render('artists/show', artists)
	})
})

//allows user to post comments
artistsRouter.post('/:id', ( req, res ) => {

  Artist.findOne( { '_id': req.params.id}, ( err, artist ) => {

    const newComment = new Comment({
    	author: req.body.author,
    	comment: req.body.comment,
    	date: req.body.date
    })
    newComment.save()
    res.redirect('/')

  })

})

//allows user to edit artist
artistsRouter.get('/:id/edit', (req, res) => {
	Artist.findOne({ '_id': req.params.id}, (err, artists) => {
		res.render('artists/edit', artists)
	})
})

artistsRouter.post('/:id/edit', function(req, res) {
	// console.log('HERE!!!!!!!!!!!!!!!!!!!!')
	Artist.findOne({ '_id': req.params.id}, (err, artists) => {
		Artist.image = req.body.url
		Artist.name = req.body.name
		Artist.genre = req.body.genre
		Artist.summary = req.body.summary
		Artist.albums = req.body.albums
		Artist.songs = req.body.songs
	})
	Artist.save()
	res.redirect('/:id')
})

module.exports = artistsRouter