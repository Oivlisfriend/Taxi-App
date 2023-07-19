const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getListaEspera() {
  return await prisma.listaEspera.findMany();
}

async function getListaEsperaById(id) {
  return await prisma.listaEspera.findUnique({
    where: { id_lista_espera: Number(id) },
  });
}

async function createListaEspera(listaEspera) {
  return await prisma.listaEspera.create({
    data: { ...listaEspera },
  });
}

async function updateListaEspera(id, listaEspera) {
  return await prisma.listaEspera.update({
    where: { id_lista_espera: Number(id) },
    data: { ...listaEspera },
  });
}

async function deleteListaEspera(id) {
  return await prisma.listaEspera.delete({
    where: { id_lista_espera: Number(id) },
  });
}

module.exports = {
  getListaEspera,
  getListaEsperaById,
  createListaEspera,
  updateListaEspera,
  deleteListaEspera
}
