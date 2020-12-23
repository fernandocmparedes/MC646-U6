const Express = require('express');
const app = Express();

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`)
});

app.set('view engine', 'ejs');

app.get("*", async (req, res) => {
    res.render('index');
});