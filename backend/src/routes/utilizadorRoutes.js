const express = require('express');
const router = express.Router();
const utilizadorController = require('../controllers/utilizadorController')

router.post('/login', async (req, res) => {
  try {
    // res.json('hello!'); 
    const email = req.body.email;
    // console.log(email + " " + password); 
    const utilizador = await utilizadorController.loginUtilizador(email);
    // const data = {
    //   user: {
    //     utilizador
    //   },
    //   status: true
    // }  
    return res.json(utilizador);
    // return res.json("sucesso"); 

  } catch (err) {
    console.log(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const utilizadores = await utilizadorController.getUtilizadores();
    return res.json(utilizadores);
  } catch (err) {
    console.log(err);
  }

});

router.get('/:id', async (req, res) => {
  try {
    const utilizador = await utilizadorController.getUtilizadorById(req.params.id);
    if (!utilizador) return res.status(404).json({ message: 'Utilizador não encontrada' });
    res.json(utilizador);
  } catch (err) {
    console.log(err);
  }

});

router.post('/', async (req, res) => {
  try {
    const utilizador = await utilizadorController.createUtilizador(req.body);
    res.json(utilizador);
  } catch (err) {
    console.log(err);
  }

});

router.put('/:id', async (req, res) => {
  try {
    const utilizador = await utilizador.updateUtilizador(req.params.id, req.body);

    if (!utilizador) return res.status(404).json({ message: 'Utilizador não encontrada' });
    res.json(utilizador);
  } catch (err) {
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await utilizadorController.deleteUtilizador(req.params.id);

    if (!result) return res.status(404).json({ message: 'Utilizador não encontrada' });
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
