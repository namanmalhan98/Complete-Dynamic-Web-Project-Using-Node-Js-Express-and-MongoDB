import { Schema, model } from 'mongoose';

const SecondBanner = new Schema({
   heading:String,
   subHeading:String,
   iconURL:String
})

const SecondBannerModel = model('SecondBanner', SecondBanner);

export {SecondBannerModel};