const express = require('express');
const app = express();

const port = 3500;

//"callback, funcion anonima"
app.listen(port,()=>{
    console.log(`Server Listenening on port ${port}`);
});

function factorial(num) {
    if (num == 0 || num == 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  
app.get('/practica/:id',(req,res) => {
    //Procesar la peticion
    let num =parseInt(req.params.id);
    //Enviar la peticion
    // res.send('Hello World!')
    const result = factorial(num);
    res.json({ result });

})