import ClientRepository from "../models/clients-models.js"


async function findAll(req, res) {
    const clients = await ClientRepository.findAll()
    res.json(clients)
}
async function addClient(req, res) {
    const createClient = await ClientRepository.create({
        name: req.body.name,
        email: req.body.email,
    })
    res.json(createClient)
}

async function updateClient(req, res) {
    await ClientRepository.update(
      {
        nome: req.body.nome,
        email: req.body.email,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
  
    ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
  }

  async function deleteClient(req, res) {
    await ClientRepository.destroy({
      where: {
        id: req.params.id,
      },
    });
  
    ClientRepository.findAll().then((result) => res.json(result));
  }
  

export default { findAll, addClient,updateClient,deleteClient}