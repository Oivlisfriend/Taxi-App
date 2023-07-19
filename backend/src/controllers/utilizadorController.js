const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function loginUtilizador(email) {
  return await prisma.utilizador.findUnique({
    where: { email: email },
  });



}

async function getUtilizadores() {
  return await prisma.utilizador.findMany();
}

async function getUtilizadorById(id) {
  return await prisma.utilizador.findUnique({
    where: { id_utilizador: Number(id) },
  });
}

async function createUtilizador(utilizador) {
  const ultimoUtilizador = await prisma.utilizador.create({
    data: { ...utilizador },
  });
  return ultimoUtilizador.id_utilizador;
}

async function updateUtilizador(id, marca) {
  return await prisma.utilizador.update({
    where: { id_utilizador: Number(id) },
    data: { ...utilizador },
  });
}

async function deleteUtilizador(id) {
  return await prisma.utilizador.delete({
    where: { id_utilizador: Number(id) },
  });
}

module.exports = {
  loginUtilizador,
  getUtilizadores,
  getUtilizadorById,
  createUtilizador,
  updateUtilizador,
  deleteUtilizador
}
