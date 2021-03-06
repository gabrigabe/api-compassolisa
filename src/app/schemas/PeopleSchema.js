const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { hash } = require('bcrypt');

const PeopleSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  data_nascimento: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  habilitado: {
    type: String,
    enum: ['sim', 'nao'],
    required: true,
  },
});

PeopleSchema.pre('save', async function encryptPass(next) {
  this.senha = await hash(this.senha, 10);
  return next();
});

PeopleSchema.pre('findOneAndUpdate', async function encryptUpdate(next) {
  const payload = this.getUpdate();
  payload.senha = await hash(payload.senha, 10);
  return next();
});
PeopleSchema.plugin(mongoosePaginate);
const Peoples = mongoose.model('Peole', PeopleSchema);

module.exports = Peoples;
