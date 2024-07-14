const moongoose = require("mongoose");
const bookingSchema = moongoose.Schema({
  bookerName: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bookieName: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },

  money: {
    type: Number,
    required: true,
  },
  userLocation: {
    type: String,
  },
  isAccepted:{
    type:Boolean,
    default:false
  },
   isDone:{
    type:Boolean,
    default:false
  }
},{timeStamp:true});
const Book = moongoose.model("Book", bookingSchema);
module.exports = Book;