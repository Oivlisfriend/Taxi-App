const express = require('express');
const router = express.Router();
const motoristaController = require('../controllers/motoristaController');

router.get('/', async (req, res) => {
  try 
  {
    const motoristas = await motoristaController.getMotoristas();
    return res.json(motoristas);
  } 
  catch (err) {
    console.log(err);
  } 
});

router.get('/:id', async (req, res) => {
  try 
  {
    const motorista = await motoristaController.getMotoristaById(req.params.id);
    if (!motorista) return res.status(404).json({ message: 'Motorista não encontrado' });
    res.json(motorista);
  } 
  catch (err) {
    console.log(err);
  } 
});

router.post('/', async (req, res) => {
  try 
  {
    const motorista = await motoristaController.createMotorista(req.body);
    res.json(motorista);
  } 
  catch (err) {
    console.log(err);
  } 
 
});

router.put('/:id', async (req, res) => {
  try 
  {
    const motorista = await motoristaController.updateMotorista(req.params.id, req.body);
    if (!motorista) return res.status(404).json({ message: 'Motorista não encontrado' });
    res.json(motorista);
  } 
  catch (err) {
    console.log(err);
  } 
  
});

router.delete('/:id', async (req, res) => {
  try 
  {
    const result = await motoristaController.deleteMotorista(req.params.id);
    if (!result) return res.status(404).json({ message: 'Motorista não encontrado' });
    res.sendStatus(204);
  } 
  catch (err) {
    console.log(err);
  } 
  
});

module.exports = router;
