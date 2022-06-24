import express, { Request, Response } from 'express';
import {  FirstBannerModel } from '../model/FirstBanner1';

import { contactModel } from '../model/Contact';
import {CompDetailModel} from '../model/Details';
import { ServiceModel } from '../model/Service';
import { SliderModel } from '../model/Slider';
import { SecondBannerModel } from '../model/SecondBanner';
import { ThirdBannerModel } from '../model/ThirdBanner';

const routes = express.Router();

routes.get("/gallery",async(req: Request, res: Response)=>{
   const CompDetails = await CompDetailModel.findOne({"_id":'62b1c8101785728a54312022'});
    res.render("gallery",{
      "details":CompDetails
    })
 });

 routes.get("/",async (req: Request, res: Response)=>{
 const compDetails = await CompDetailModel.findOne({"_id":'62b1c8101785728a54312022'});
 const slides = await SliderModel.find();
 const services = await ServiceModel.find();
 const FirstBanner = await FirstBannerModel.find();
 console.log(FirstBanner);
 const SecondBanner = await SecondBannerModel.find();
 console.log(SecondBanner);
 const ThirdBanner = await ThirdBannerModel.find();
 console.log(ThirdBanner);
 
  res.render("index",{
   "details":compDetails,
   "slides":slides,
   "services":services,
   "FirstBanner":FirstBanner,
   "SecondBanner":SecondBanner,
   "ThirdBanner":ThirdBanner
  });
});

routes.post("/process-contact-form",async(req: Request, res: Response)=>{
  console.log("this form data is submitted on this route");
   console.log(req.body);
   //save the data to db
   try{
    const contactData = await contactModel.create(req.body);
    console.log(contactData);
    res.redirect("/",)
   }catch(e){
 console.log(e);
 res.redirect("/error")
   }
  
})

export default routes;
