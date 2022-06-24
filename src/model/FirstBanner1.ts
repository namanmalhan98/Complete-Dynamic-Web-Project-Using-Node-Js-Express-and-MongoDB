import { Schema, model } from 'mongoose';

const FirstBanner = new Schema({
   heading:String,
   subHeading:String
})

const FirstBannerModel = model('FirstBanner', FirstBanner);

export {FirstBannerModel};