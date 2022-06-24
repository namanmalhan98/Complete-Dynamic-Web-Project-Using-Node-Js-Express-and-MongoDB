import { Schema, model } from 'mongoose';

const Service = new Schema({
    icon:String,
    title:String,
    description:String,
    linkText:String,
    link:String
})

const ServiceModel = model('Service', Service);

export {ServiceModel};