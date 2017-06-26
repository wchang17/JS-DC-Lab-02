const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
author: String,
comment: String,
date: Date
})

const Comment = mongoose.model( 'Comment', commentSchema )

module.exports = Comment