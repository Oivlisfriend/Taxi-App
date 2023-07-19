const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const marcaRoutes = require('./routes/marcaRoutes');
const motoristaRoutes = require('./routes/motoristaRoutes');
const empresaRoutes = require('./routes/empresaRoutes');
const utilizadorRoutes = require('./routes/utilizadorRoutes');
const viagemRoutes = require('./routes/viagemRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const veiculoRoutes = require('./routes/veiculoRoutes');
const classificacaoRoutes = require('./routes/classificacaoRoutes');
const listaEsperaRoutes = require('./routes/listaEsperaRoutes');

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  // res.send('hello world'); 
});

app.use('/empresa', empresaRoutes);
app.use('/utilizador', utilizadorRoutes);
app.use('/motorista', motoristaRoutes);
app.use('/cliente', clienteRoutes);
app.use('/veiculo', veiculoRoutes);
app.use('/marca', marcaRoutes);
app.use('/viagem', viagemRoutes);
app.use('/lista', listaEsperaRoutes)
app.use('/classificacao', classificacaoRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`UP!`);
});