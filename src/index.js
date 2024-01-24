const express = require('express');
const app = express();

const port = 3500;

app.use(express.json());

//"callback, funcion anonima"
app.listen(port,()=>{
    console.log(`Server Listenening on port ${port}`);
});

// function factorial(num) {
//     if (num == 0 || num == 1) {
//       return 1;
//     } else {
//       return num * factorial(num - 1);
//     }
//   }
  
//Middlewares:funciones que se ejecutan antes de llegar a la ruta
app.get('/practica/:id',(req,res) => {
    //Procesar la peticion
    // let num =parseInt(req.params.id);
    //Enviar la peticion
    res.send('Hello World')
    
    // const result = factorial(num);
    // res.json({ result });

})

const alumnos = [{"nombre": "Alex", "apellido": "Marquez", "matricula": 220419 }];
app.post('/insertOne', (req, res) => {
    alumnos.push(req.body); 
    console.log(alumnos);
    res.json({
        "mensaje": 'Alumno Guardado'
    });
});

app.get('/getOne/:matricula', (req, res) => {
    const matricula = parseInt(req.params.matricula);
    const alumno = alumnos.find( obj=> obj.matricula === matricula);
    if (!alumno) {
        console.log(alumno);
        res.json({ message: 'No esta ese alumno' });
    } else {
        res.json(alumno);
    }
});

app.get('/getAll', (req, res) => {
    res.json(alumnos);
});


app.get('/deleteOne/:matricula', (req, res) => {
    const matricula = parseInt(req.params.matricula);
    const alumno = alumnos.find(ele => ele.matricula === matricula); 
    const index = alumnos.indexOf(alumno); 
    if (!alumno) {
        res.json({ mensaje: 'No existe ese alumno' });
    } else {
        alumnos.splice(index,1); 
        res.json({ mensaje: 'Alumno Dado de Baja' });
        console.log(alumnos);
    }
});

app.post('/updateOne/:matricula', (req, res) => {
    const matricula=parseInt(req.params.matricula);
    const alumno = alumnos.find(obj => obj.matricula === matricula); 
    const index = alumnos.indexOf(alumno); 
    if(!alumno){
        res.json({message:'No existe ese alumno'});
    }else{
        alumnos[index]=req.body; 
        console.log(alumno);
        res.json({message:'Alumno Actualizado'});
    }
});