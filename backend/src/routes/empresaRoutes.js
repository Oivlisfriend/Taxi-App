const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController')

router.get('/', async (req, res) => {
  try {
    const empresa = await empresaController.getEmpresa();
    return res.json(empresa);
  } catch (err) {
    console.log(err);
  }

});


router.get('/:id', async (req, res) => {
  try {
    const empresa = await empresaController.getEmpresaById(req.params.id);
    if (!empresa) return res.status(404).json({ message: 'Empresa não encontrada' });
    res.json(empresa);
  } catch (err) {
    console.log(err);
  }
  });

  router.post('/', async (req, res) => {
    try {
      const empresa = await empresaController.createEmpresa(req.body);
      res.json(empresa); 
     } catch (err) {
      console.log(err);
    }
  });
  
  router.put('/:id', async (req, res) => { 
    try {
      const empresa = await empresaController.updateEmpresa(req.params.id, req.body);
      if (!empresa) return res.status(404).json({ message: 'Empresa não encontrada' });
      res.json(empresa);
     } catch (err) {
      console.log(err);
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const result = await empresaController.deleteEmpresa(req.params.id);
      if (!result) return res.status(404).json({ message: 'Empresa não encontrada' });
      res.sendStatus(204);
     } catch (err) {
      console.log(err);
    }
});
  
module.exports = router;
