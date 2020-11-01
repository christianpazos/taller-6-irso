import {Schema, model} from 'mongoose'


const productSchema = new Schema ({
    segmento: String,
    puertas: Number,
    llantas: String,
    transmision: String, 
    color: String,
    vidrios: String,
    tapizado: String,
    motor: String,
    direccion: String
},{
    timestamps: true,
    versionKey: false 
}
)

export default model('Product', productSchema);
