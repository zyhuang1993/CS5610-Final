var mongoose = require('mongoose');
var reviewSchema = require('../review/review.schema.server');

var movieSchema = new mongoose.Schema({
    title: String,
    totalScore: Number,
    totalRates: Number,
    db_id: String,
    reviews: [reviewSchema],
    release_date: String,
    poster_path: String,
    overview: String,
    dateCreated: {type:Date, default: Date.now()},
  },
  {collection:'Movies'}
);

module.exports = movieSchema;
