const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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
PeopleSchema.plugin(mongoosePaginate);
const Peoples = mongoose.model('Peole', PeopleSchema);

module.exports = Peoples;
