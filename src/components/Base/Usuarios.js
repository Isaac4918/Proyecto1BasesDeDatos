const sql = require('mssql');
const {config} = require('./dbconfig');

class Usuarios {
    async login(userName, password){
        return await sql
            .connect(config)
            .then((pool) => {
                return pool
                    .request()
                    .input('inNombre', sql.VarChar(16), userName)
                    .input('inPass', sql.VarChar(16), password)
                    .output('outResult', sql.Int)
                    .execute('InicioSesion');
            })
            .then((result) => {

                if (result.recordset[0].length == 0 || result.output.outResult != 0)
                    console.log('error');

                return result.recordset[0];
            })
            .catch((err) => {
                throw err;
            });
    }
}

export default Usuarios;