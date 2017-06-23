const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artistSchema = new Schema({
name: String,
summary: String,
genre: String,
songs: Array,
albums: Array,
image: String,
comments: Array
})

const Artist = mongoose.model( 'Artist', artistSchema )

module.exports = Artist