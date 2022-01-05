/* eslint-disable no-underscore-dangle */
class PeopleSerializer {
  serializeAllPeople(data) {
    const docs = data.docs.map((doc) => {
      const formatedDocs = ({
        _id: doc._id,
        nome: doc.nome,
        cpf: doc.cpf,
        data_nascimento: doc.data_nascimento,
        email: doc.email,
        habilitado: doc.habilitado,

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

  serializeAPeople(data) {
    const formatedPeople = {
      _id: data._id,
      nome: data.nome,
      cpf: data.cpf,
      data_nascimento: data.data_nascimento,
      email: data.email,
      habilitado: data.habilitado,
    };
    return formatedPeople;
  }
}

module.exports = new PeopleSerializer();
