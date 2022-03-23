const sql = require('mssql');
const {config} = require('./dbconfig');



const getUsers = async(testA, testB) => {
    try{
        const prueba = '{"":0}';
        let pool = await sql.connect(config);
        let usuarios = pool.request().query("DECLARE @RC int DECLARE @inNombre varchar(16) = "+ testA + "DECLARE @inPass varchar(16) = " + testB + " DECLARE @outResult int EXECUTE @RC = [dbo].[InicioSesion] @inNombre,@inPass,@outResult OUTPUT SELECT @outResult");        
        
        //console.log((await usuarios).recordset[0]);

        //console.log(JSON.stringify((await usuarios).recordset[0]));

        /*if(JSON.stringify((await usuarios).recordset[0]) == prueba){
            console.log("Sirvio");
        }*/
      
        return usuarios;
    }catch(error){
        console.log(error);
    }
}

//"DECLARE @RC int DECLARE @inNombre varchar(16) = 'Hola' DECLARE @inPass varchar(16) = 'prueba' DECLARE @outResult int EXECUTE @RC = [dbo].[InicioSesion] @inNombre,@inPass,@outResult OUTPUT SELECT @outResult"

module.exports = {getUsers};
