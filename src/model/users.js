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
        required: [true, 'Llena el campo número documento']
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
    },
    numero_celular:{
        type: String,
        required: [true, 'Llena el campo número de celular']
    },
    correo:{
        type: String,
        required: [true, 'Llena el campo correo']
    },
    contraseña:{
        type: String,
        required: [true, 'Llena el campo contraseña']
    }
})

module.exports = mongoose.model('User', UserSchema);