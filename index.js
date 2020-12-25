const Express = require('express');
const app = Express();

//teste 5: permitindo que arquivos do diretorio 'public' fiquem visiveis externamente
app.use(Express.static('public'));

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`)
});

app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
    res.render('index');
});

app.all("*", async (req, res) => { 
  res.status(404);
  res.send("Arquivo ou página não encontrado!")
});
