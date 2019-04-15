var mongoose = require('mongoose');
var reviewSchema = require('../review/review.schema.server');

var movieSchema = new mongoose.Schema({
    title: String,
    rate: Number,
    db_id: String,
    reviews: [reviewSchema],
    dateCreated: {type:Date, default: Date.now()},
  },
  {collection:'Movies'}
);

module.exports = movieSchema;