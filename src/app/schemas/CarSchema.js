const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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
      min: 1,
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

CarsSchema.plugin(mongoosePaginate);

const Cars = mongoose.model('Cars', CarsSchema);

module.exports = Cars;
