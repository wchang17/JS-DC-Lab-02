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
	const artist = new Artist({
		image: req.body.url,
		name: req.body.name,
		genre: req.body.genre,
		summary: req.body.summary,
		albums: req.body.albums,
		songs: req.body.songs
	})
	artist.save()
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
    	content: req.body.comment,
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
		artist.image = req.body.url
		artist.name = req.body.name
		artist.genre = req.body.genre
		artist.summary = req.body.summary
		artist.albums = req.body.albums
		artist.songs = req.body.songs
	})
	artist.save()
	res.redirect('/')
})

module.exports = artistsRouter