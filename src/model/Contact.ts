import { Schema, model } from 'mongoose';

const contact = new Schema({
   email:String,
   phone:Number,
   queimry:String
})

const contactModel = model('contactForm', contact);

export {contactModel};