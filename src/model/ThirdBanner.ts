import { Schema, model } from 'mongoose';

const ThirdBanner = new Schema({
   heading:String,
   subHeading:String,
   iconURL:String
})

const ThirdBannerModel = model('ThirdBanner', ThirdBanner);

export {ThirdBannerModel};