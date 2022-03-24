const sql = require('mssql');
const {config} = require('./dbconfig');



const iniciarSesion = async(userName, password) => {
    try{

        let pool = await sql.connect(config);
        let usuarios = await pool.request().input('inNombre', sql.VarChar(16), userName).input('inPass', sql.VarChar(16), password).output('outResult', sql.Int).execute('InicioSesion');
        
        return usuarios;
    }catch(error){
        console.log(error);
    }
}

const insertarArticulo = async(name, price) => {
    try{

        let pool = await sql.connect(config);
        
        let articulo = await pool.request().input('inNombre', sql.VarChar(128), name).input('inPrecio', sql.Money, price).output('outResult', sql.Int).execute('InsertarArticulo');
        
        return articulo;
    }catch(error){
        console.log(error);
    }
}

const listarCantidad = async(cantidad) => {
    try{

        let pool = await sql.connect(config);
        let articulos = await pool.request().input('inCantidad', sql.Int, cantidad).output('outResult', sql.Int).execute('ListarCantidad');
        
        return articulos;
    }catch(error){
        console.log(error);
    }
}

const listarNombres = async(data) => {
    try{

        let pool = await sql.connect(config);
        let nombres = await pool.request().input('inData', sql.VarChar(32), data).output('outResult', sql.Int).execute('ListarNombre');
        
        return nombres;
    }catch(error){
        console.log(error);
    }
}

const validarNombre = async(name) => {
    try{

        let pool = await sql.connect(config);
        let nombreValidado = await pool.request().input('inNombre', sql.VarChar(128), name).output('outResult', sql.Int).execute('ValidarNombre');
        
        return nombreValidado;
    }catch(error){
        console.log(error);
    }
}


//"DECLARE @RC int DECLARE @inNombre varchar(16) = 'Hola' DECLARE @inPass varchar(16) = 'prueba' DECLARE @outResult int EXECUTE @RC = [dbo].[InicioSesion] @inNombre,@inPass,@outResult OUTPUT SELECT @outResult"

module.exports = {iniciarSesion, insertarArticulo, listarCantidad, listarNombres, validarNombre};
