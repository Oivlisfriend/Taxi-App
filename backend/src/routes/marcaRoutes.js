const express = require('express');
const router = express.Router();
const marcaController = require('../controllers/marcaController')

router.get('/', async (req, res) => {
  try 
  {
    const marcas = await marcaController.getMarcas();
    return res.json(marcas);
  } 
  catch (err) {
    console.log(err);
  }
});


router.get('/:id', async (req, res) => {
  try 
  {
    const marca = await marcaController.getMarcaById(req.params.id);
    if (!marca) return res.status(404).json({ message: 'Marca não encontrada' });
    res.json(marca);
  } 
  catch (err) {
    console.log(err);
  }   
});

  router.post('/', async (req, res) => {
    try 
  {
    const marca = await marcaController.createMarca(req.body);
    res.json(marca);
  } 
  catch (err) {
    console.log(err);
  } 
  });
  
  router.put('/:id', async (req, res) => {
    try 
    {
      const marca = await marcaController.updateMarca(req.params.id, req.body);
      if (!marca) return res.status(404).json({ message: 'Marca não encontrada' });
      res.json(marca);
    } 
    catch (err) {
      console.log(err);
    }  
    
  });
  
  router.delete('/:id', async (req, res) => {
    try 
    {
      const result = await marcaController.deleteMarca(req.params.id);
      if (!result) return res.status(404).json({ message: 'Marca não encontrada' });
      res.sendStatus(204);
    } 
    catch (err) {
      console.log(err);
    }  
    
});
  
module.exports = router;
