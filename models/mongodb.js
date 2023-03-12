const mongoose = require("mongoose");

//connect mongoose
mongoose.connect("mongodb+srv://Sherin17:Reenijiji1@cluster0.quvjjgb.mongodb.net/RecipeApplication?retryWrites=true&w=majority");

//Schema
const Schema = mongoose.Schema;
var RecipeSchema=new Schema({
   RecipeName:String,
   Duration_for_cooking:String,
   Number_of_Servings:Number,
   Descriptions:String,
   Category:String
})

const RecipeInfo = mongoose.model('recipe',RecipeSchema)
module.exports =RecipeInfo