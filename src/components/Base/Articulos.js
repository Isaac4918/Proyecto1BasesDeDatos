const sql = require('mssql');
const {config} = require('./dbconfig');

class Articulos {
    async cantidadArticulos(limit){
        return await sql
            .connect(config)
            .then((pool) => {
                return pool
                    .request()
                    .input('inCantidad', sql.Int, limit)
                    .output('outResult', sql.Int)
                    .execute('ListarCantidad');
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

module.exports = Articulos;