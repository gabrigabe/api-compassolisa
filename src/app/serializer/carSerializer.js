/* eslint-disable no-underscore-dangle */
class CarSerializer {
  async serializeCar(data) {
    const docs = data.docs.map((doc) => {
      const formatedDocs = ({
        _id: doc._id,
        modelo: doc.modelo,
        cor: doc.cor,
        ano: doc.ano,
        acessorios: doc.acessorios,
        quantidadePassageiros: doc.quantidadePassageiros,

      });
      return formatedDocs;
    });
    return {
      veiculos: docs,
      total: data.totalDocs,
      limit: data.limit,
      offset: data.offset + 1,
      offsets: data.totalPages,
    };
  }
}

module.exports = new CarSerializer();
