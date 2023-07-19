const express = require('express');
const router = express.Router();
const classificacaoController = require('../controllers/classificacaoController');

router.get('/', async (req, res) => {
  try {
    const classificacoes = await classificacaoController.getClassificacaoMotorista();
    return res.json(classificacoes);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const classificacao = await classificacaoController.getClassificacaoMotoristaById(req.params.id);
    if (!classificacao) return res.status(404).json({ message: 'Classificação não encontrada' });
    return res.json(classificacao);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const classificacao = await classificacaoController.createClassificacaoMotorista(req.body);
    res.json(classificacao);
  } catch (err) {
    console.log(err);
  }

});

router.put('/:id', async (req, res) => {
  try {
    const classificacao = await classificacaoController.updateClassificacaoMotorista(req.params.id, req.body);
    if (!classificacao) return res.status(404).json({ message: 'Classificação não encontrada' });
    res.json(classificacao);
  } catch (err) {
    console.log(err);
  }

});

router.delete('/:id', async (req, res) => {
  try {
    const result = await classificacaoController.deleteClassificacaoMotorista(req.params.id);
    if (!result) return res.status(404).json({ message: 'Classificação não encontrada' });
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
  }

});

module.exports = router;
