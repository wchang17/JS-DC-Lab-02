const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artistSchema = new Schema({
name: String,
summary: String,
genre: String,
songs: String,
albums: String,
image: String
})

const Artist = mongoose.model( 'Artist', artistSchema )

module.exports = Artist