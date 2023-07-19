const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getEmpresa() {
  return await prisma.empresa.findMany();
}

async function getEmpresaById(id) {
  return await prisma.empresa.findUnique({
    where: { id_empresa: Number(id) },


  });
}

async function createEmpresa(empresa) {
  return await prisma.empresa.create({
    data: { ...empresa },
  });
}

async function updateEmpresa(id, empresa) {
  return await prisma.empresa.update({
    where: { id_empresa: Number(id) },
    data: { ...empresa },
  });
}

async function deleteEmpresa(id) {
  return await prisma.empresa.delete({
    where: { id_empresa: Number(id) },
  });
}

module.exports = {
  getEmpresa,
  getEmpresaById,
  createEmpresa,
  updateEmpresa,
  deleteEmpresa
}
