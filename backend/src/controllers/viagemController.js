const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getViagens() {
  return await prisma.viagem.findMany();
}

async function getViagemById(id) {
  return await prisma.viagem.findUnique({
    where: { id_viagem: Number(id) },
  });
}

async function createViagem(viagem) {
  return await prisma.viagem.create({
    data: { ...viagem },
  });
}

async function updateViagem(id, viagem) {
  return await prisma.viagem.update({
    where: { id_viagem: Number(id) },
    data: { ...viagem },
  });
}

async function deleteViagem(id) {
  return await prisma.viagem.delete({
    where: { id_viagem: Number(id) },
  });
}

module.exports = {
  getViagens,
  getViagemById,
  createViagem,
  updateViagem,
  deleteViagem
}
