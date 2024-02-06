import { Schema, model } from "mongoose";

const productSchema = new Schema ({
    barcode: {
        type: String,
        unique: true,
        required: true
    },
    description: String,
    brand:String,
    price: Number,
    cost: Number,
    stock: Number,
    expireDate: String,
    status: Number
},{
   
    //para que no agregue la a los atributos el _V
    versionKey: false,
    //agregue dos atributos por defautl
    timestamps: true
});

export default model('products', productSchema);//('nombre','nombredelesquema')