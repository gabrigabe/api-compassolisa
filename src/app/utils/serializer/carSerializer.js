/* eslint-disable no-underscore-dangle */
class CarSerializer {
  serializeAllCars(data) {
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
      offset: data.page,
      offsets: data.totalPages,
    };
  }

  serializeACar(data) {
    const formatedCar = {
      _id: data._id,
      modelo: data.modelo,
      cor: data.cor,
      ano: data.ano,
      acessorios: data.acessorios,
      quantidadePassageiros: data.quantidadePassageiros,
    };
    return formatedCar;
  }
}

module.exports = new CarSerializer();
