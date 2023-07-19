const express = require('express');
const router = express.Router();
const viagemController = require('../controllers/viagemController');

router.get('/', async (req, res) => {
  try {
    const viagens = await viagemController.getViagens();
    return res.json(viagens);
  }catch(err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const viagem = await viagemController.getViagemById(req.params.id);
    if (!viagem) return res.status(404).json({ message: 'Viagem não encontrada' });
    res.json(viagem);
  }catch(err) {
    console.log(err);
  }

});

router.post('/', async (req, res) => {
  try {
    const viagem = await viagemController.createViagem(req.body);
    res.json(viagem);
  }catch(err) {
    console.log(err);
  }

});

router.put('/:id', async (req, res) => {
  try {
    const viagem = await viagemController.updateViagem(req.params.id, req.body);
    if (!viagem) return res.status(404).json({ message: 'Viagem não encontrada' });
    res.json(viagem);    
  }catch(err) {
    console.log(err);
  }

});

router.delete('/:id', async (req, res) => {
  try {
    const result = await viagemController.deleteViagem(req.params.id);
    if (!result) return res.status(404).json({ message: 'Viagem não encontrada' });
    res.sendStatus(204);
  }catch(err) {
    console.log(err);
  }
});

module.exports = router;
