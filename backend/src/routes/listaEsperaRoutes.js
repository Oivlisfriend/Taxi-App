const express = require('express');
const router = express.Router();
const listaEsperaController = require('../controllers/listaEsperaController');

router.get('/', async (req, res) => {
  try {
    const listaEspera = await listaEsperaController.getListaEspera();
    return res.json(listaEspera);
   } catch (err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
    try 
    {
      const listaEspera = await listaEsperaController.getListaEsperaById(req.params.id);
      if (!listaEspera) return res.status(404).json({ message: 'ListaEspera não encontrada' });
      res.json(listaEspera);
    } 
    catch (err) {
      console.log(err);
    }
});

router.post('/', async (req, res) => {
  try 
    {
      const listaEspera = await listaEsperaController.createListaEspera(req.body);
      res.json(listaEspera);
    } 
  catch (err) {
      console.log(err);
    }
});

router.put('/:id', async (req, res) => {
    try 
    {
      const listaEspera = await listaEsperaController.updateListaEspera(req.params.id, req.body);
      if (!listaEspera) return res.status(404).json({ message: 'ListaEspera não encontrada' });
      res.json(listaEspera);
    } 
  catch (err) {
      console.log(err);
    }
  
});

router.delete('/:id', async (req, res) => {
  try 
  {
    const result = await listaEsperaController.deleteListaEspera(req.params.id);
    if (!result) return res.status(404).json({ message: 'ListaEspera não encontrada' });
    res.sendStatus(204);
  } 
  catch (err) {
    console.log(err);
  }

});

module.exports = router;
