const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getMotoristas() {
  return await prisma.motorista.findMany();
}

async function getMotoristaById(id) {
  return await prisma.motorista.findUnique({
    where: { id_motorista: Number(id) },
  });
}

async function createMotorista(motorista) {
  return await prisma.motorista.create({
    data: { ...motorista },
  });
}

async function updateMotorista(id, motorista) {
  return await prisma.motorista.update({
    where: { id_motorista: Number(id) },
    data: { ...motorista },
  });
}

async function deleteMotorista(id) {
  return await prisma.motorista.delete({
    where: { id_motorista: Number(id) },
  });
}

module.exports = {
  getMotoristas,
  getMotoristaById,
  createMotorista,
  updateMotorista,
  deleteMotorista
}
