import express from 'express';
import routes from './routes/main';
import hbs from 'hbs';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import { FirstBannerModel } from './model/FirstBanner1';
import { SecondBannerModel } from './model/SecondBanner';
import { ThirdBannerModel } from './model/ThirdBanner';

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(express.static("."));
app.use(express.json());
app.use('/', routes);

//Template engine
app.set('view engine', 'hbs');
app.set('views', "views");
hbs.registerPartials("views/partials")

//db connection 
mongoose.connect("mongodb://localhost:27017/dynamic-web", () => {
    console.log("MongoDb database is connected");
    // ThirdBannerModel.create({
    //     heading: "We work for humanity",
    //     subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna dolor, porta vitae fermentum malesuada, suscipit nec massa.",
    //     iconURL:"src/Public/Images/Dog.jpg"
    // })
    // console.log("Data inserted by model successfully");
})


app.listen(PORT, () => {
    console.log(`This server is working fine & connected to port ${PORT}`);
})
