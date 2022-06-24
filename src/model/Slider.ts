import { Schema, model } from 'mongoose';

const Slider = new Schema({
 title:{
    type: String,
    required: true,
    max: 50,
 },
 subTitle:{
    type: String,
    required: true,
    max: 50,
 },
 imageURL:{
    type: String,
    required: true,
    max: 50,
 }
})

const SliderModel = model('slider', Slider);

export {SliderModel};