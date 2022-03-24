const express = require("express");
const dbOperation = require("./src/components/Base/dbOperations");
const cors = require("cors");

const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/inicio', async(req, res) =>{
    //console.log("called");
    //console.log("Usuario: ", req.body.name);
    const result = await dbOperation.iniciarSesion(req.body.name, req.body.password);
    res.send(result.output);
});

app.post('/getFromName', async(req, res) =>{
    //console.log("called");
    //console.log("Usuario: ", req.body.name);
    const result = await dbOperation.listarNombres(req.body.name);
    res.send(result.recordset);
});

app.post('/getFromCant', async(req, res) =>{
    //console.log("called");
    //console.log("Usuario: ", req.body.name);
    const result = await dbOperation.listarCantidad(req.body.name);
    res.send(result.recordset);
});

app.post('/getAdded', async(req, res) =>{
    //console.log("called");
    //console.log("Usuario: ", req.body.name);
    const result = await dbOperation.insertarArticulo(req.body.name,req.body.price);
    res.send(result);
});

app.post('/getValid', async(req, res) =>{
    //console.log("called");
    //console.log("Usuario: ", req.body.name);
    const result = await dbOperation.validarNombre(req.body.name);
    res.send(result.output);
});

app.post("/hello", function (req, res){
    console.log("called");
    res.send({result: "OMG HI"});
});



// dbOperation.iniciarSesion("fquiros","love45").then(res =>{
//     if(res.output.outResult == 0){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// })

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));