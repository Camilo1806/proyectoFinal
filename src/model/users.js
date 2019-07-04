const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema= new Schema({
    nombres:{
        type: String,
        required: [true, 'Llena el campo nombre']
    },
    apellidos:{
        type: String,
        required: [true, 'Llena el campo apellidos']
    },
    tipo_documento:{
        type: String,
        required: [true, 'Llena el campo tipo documento']
    },
    numero_documento:{
        type: String,
        required: [true, 'Llena el campo numero documento']
    },
    fecha_expedicion:{
        type: String,
        required: [true, 'Llena el campo fecha expedición']
    },
    fecha_nacimiento:{
        type: String,
        required: [true, 'Llena el campo fecha de nacimiento']
    },
    sexo:{
        type: String,
        required: [true, 'Llena el campo sexo']
    }
})

module.exports = mongoose.model('User', UserSchema);