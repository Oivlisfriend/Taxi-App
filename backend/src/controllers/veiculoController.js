const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getVeiculos() {
  return await prisma.veiculo.findMany();
}

async function getVeiculoById(id) {
  return await prisma.veiculo.findUnique({
    where: { id_veiculo: Number(id) },
  });
}

async function createVeiculo(veiculo) {
  return await prisma.veiculo.create({
    data: { ...veiculo },
  });
}

async function updateVeiculo(id, veiculo) {
  return await prisma.veiculo.update({
    where: { id_veiculo: Number(id) },
    data: { ...veiculo },
  });
}

async function deleteVeiculo(id) {
  return await prisma.veiculo.delete({
    where: { id_veiculo: Number(id) },
  });
}

module.exports = {
  getVeiculos,
  getVeiculoById,
  createVeiculo,
  updateVeiculo,
  deleteVeiculo
}
