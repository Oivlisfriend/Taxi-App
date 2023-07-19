const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getMarcas() {
  return await prisma.marca.findMany();
}

async function getMarcaById(id) {
  return await prisma.marca.findUnique({
    where: { id_marca: Number(id) },
  });
}

async function createMarca(marca) {
  return await prisma.marca.create({
    data: { ...marca },
  });
}

async function updateMarca(id, marca) {
  return await prisma.marca.update({
    where: { id_marca: Number(id) },
    data: { ...marca },
  });
}

async function deleteMarca(id) {
  return await prisma.marca.delete({
    where: { id_marca: Number(id) },
  });
}

module.exports = {
  getMarcas,
  getMarcaById,
  createMarca,
  updateMarca,
  deleteMarca
}
