/**
 * Created by Sandeep on 01/06/14.
 */

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
    name:String,
    password:String
});

module.exports=mongoose.model('User',userSchema);