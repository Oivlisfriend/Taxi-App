const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getClassificacaoMotorista() {
  return await prisma.classificacaoMotorista.findMany();
}

async function getClassificacaoMotoristaById(id) {
  return await prisma.classificacaoMotorista.findUnique({

    where: { id: Number(id) },
  });
}

async function createClassificacaoMotorista(classificacaoMotorista) {
  return await prisma.classificacaoMotorista.create({
    data: { ...classificacaoMotorista },
  });
}

async function updateClassificacaoMotorista(id, classificacaoMotorista) {
  return await prisma.classificacaoMotorista.update({
    where: { id: Number(id) },
    data: { ...classificacaoMotorista },
  });
}

async function deleteClassificacaoMotorista(id) {
  return await prisma.classificacaoMotorista.delete({
    where: { id: Number(id) },
  });
}

module.exports = {
  getClassificacaoMotorista,
  getClassificacaoMotoristaById,
  createClassificacaoMotorista,
  updateClassificacaoMotorista,
  deleteClassificacaoMotorista
}
