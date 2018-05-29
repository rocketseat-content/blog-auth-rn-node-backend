const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Conecta no MongoDB
mongoose.connect(
  "mongodb://dev:e609f4f6ac550e8d96b64f835bd36fad@ds135750.mlab.com:35750/auth-jwt-node-react-native"
);

// Carrega o model de Usuário
require("./models/user");

app.use(bodyParser.json());

// Inicia as rotas da API
app.use("/api", require("./controllers/userController"));

app.listen(3000);
