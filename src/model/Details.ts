import { Schema, model } from 'mongoose';

const CompDetail = new Schema({
    brandName: {
      type: String,
      required: true,
      max: 50,
    },
    brandIconURL: {
        type: String,
        required: true,
        max: 50,
      },
      links:[{
        label:String,
        url:String
      }]
})

const CompDetailModel = model('detail', CompDetail);

export {CompDetailModel};