const mongoose = require('mongoose');

const CarsSchema = mongoose.Schema({
  modelo: {
    type: String,
    required: true,
  },
  cor: {
    type: String,
    required: true,
  },
  ano: {
    type: Number,
    min: 1950,
    max: 2022,
    required: true,
  },
  acessorios: [{
    descricao: {
      type: String,
      required: true,
    },
  },
  ],
  quantidadePassageiros: {
    type: Number,
    min: 1,
    required: true,
  },

});

const Cars = mongoose.model('Cars', CarsSchema);

module.exports = Cars;
