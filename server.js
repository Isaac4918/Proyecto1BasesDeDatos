const express = require("express");
const dbOperation = require("./src/components/Base/dbOperations");
const cors = require("cors");


function serverPrueba(){
    dbOperation.getUsers("'fquiros'","'love45'").then(res =>{
        console.log(res.recordset[0]);
    })
}

module.exports = {serverPrueba};