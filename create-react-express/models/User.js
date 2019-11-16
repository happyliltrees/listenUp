const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;
const UserSchema = new Schema({
     username: {
        type: String,
        min: [15,"Not Enough"],
        max:[20],
        required: true,
        unique: true
     },
     password: {
        type: String,
        min:[15,"Not Enough"],
        max:[20],
        unique: true,
        required: true
     },
     email: {
        type: String,
        trim: true,
        lowercase: false,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }, 
    createdDate: {
        type: Date, default: Date.now
    },
    // Referencing other documents
    lessons:[
        {
            lessonId:{
                type: ObjectId,
                ref:"Lesson"
            },
            progress:{
                type: ObjectId,
                ref: "Progress"
            },
            points: {
                type : ObjectId,
                ref: "Points"
            }
        }
    ]
    //Make sure to finish
});
const User = mongoose.Model("User", UserSchema);
module.exports = User

