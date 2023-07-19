const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

router.get('/', async (req, res) => {
  try {
    const veiculos = await veiculoController.getVeiculos();
    return res.json(veiculos);    
  }catch(err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
    const veiculo = await veiculoController.getVeiculoById(req.params.id);
    if (!veiculo) return res.status(404).json({ message: 'Veiculo não encontrado' });
    res.json(veiculo);

});

router.post('/', async (req, res) => {
  try {
    const veiculo = await veiculoController.createVeiculo(req.body);
    res.json(veiculo);    
  }catch(err) {
    console.log(err);
  }

});

router.put('/:id', async (req, res) => {
  try {
    const veiculo = await veiculoController.updateVeiculo(req.params.id, req.body);
    if (!veiculo) return res.status(404).json({ message: 'Veiculo não encontrado' });
    res.json(veiculo);
  }catch(err) {
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await veiculoController.deleteVeiculo(req.params.id);
    if (!result) return res.status(404).json({ message: 'Veiculo não encontrado' });
    res.sendStatus(204);
  }catch(err) {
    console.log(err);
  }
});

module.exports = router;
