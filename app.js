const exprees = require('express')
const app = exprees()

const Router = require("./router/router");

app.set("view engine", "pug");
app.use("/", Router);

app.use(exprees.static('public'))
app.listen(3000, () => console.log('Aplicacion corriendo'))