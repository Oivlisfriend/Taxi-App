const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const utilizadorController = require('../controllers/utilizadorController');
async function getClientes() {
  return await prisma.cliente.findMany();
}

async function getClienteById(id) {
  return await prisma.cliente.findUnique({
    where: { id_cliente: Number(id) },
  });

}
async function getClienteByIdUsuario(id) {
  return await prisma.cliente.findMany({
    where: { id_utilizador: Number(id) },
  });

}

async function createCliente(cliente) {
  const {
    nome,
    email,
    morada,
    password,
    data_nascimento } = cliente;
  let dados = {
    nome,
    email,
    morada,
    password,
    data_nascimento
  }
  console.log(dados);
  const id_utilizador = await utilizadorController.createUtilizador(dados);
  const localizacao_y = 1;
  const localizacao_x = 1;
  dados = {
    id_utilizador,
    localizacao_y,
    localizacao_x


  }

  await prisma.cliente.create({
    data: { ...dados },
  });
  return true;
}

async function updateCliente(id, cliente) {
  return await prisma.cliente.update({
    where: { id_cliente: Number(id) },
    data: { ...cliente },
  });
}

async function deleteCliente(id) {
  return await prisma.cliente.delete({
    where: { id_cliente: Number(id) },
  });
}

module.exports = {
  getClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente,
  getClienteByIdUsuario
};
