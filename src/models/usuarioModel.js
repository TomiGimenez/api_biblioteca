const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const UsuarioSchema = new mongoose.Schema({
    username: String,
    password: String
}, { collection: 'usuarios' });

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;