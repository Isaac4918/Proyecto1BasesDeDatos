import React, {useState} from "react";
import Title from "./Title/Title";
import Label from "./Label/Label";
import Input from "./Input/Input";
import "./Login.css";

import {useNavigate} from "react-router-dom";

//const {config} = require('./dbconfig');

const Login = () => {

    let navigate = useNavigate(); //variable para navegar entre paginas

    //Constantes
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    //Funciones
    function handleChange(name,value){
        if(name == "usuario"){
            setUser(value)            
        }else{
            setPassword(value)
        }
    };

    /*async function iniciarSesion(userName, password){
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
    }*/

    function ifMatch(param){
        if(param.user.length > 0 && param.password.length > 0){
            console.log("usuario" + param.user);
        }else{
            console.log("No hay cuenta")
        }

    };

    function handleSubmit(){
        let account = {user, password}
        if (account){
            ifMatch(account)
        }
    };

    //Retorno

    return(
        <header className="formato">
            <div>
                <Title text = "Bienvenido!"/>
                <Label text = "Usuario: "/>

                <Input
                attribute={{
                    id: "usuario",
                    name: "usuario",
                    type: "text",
                    placeholder: "Ingrese su usuario"
                }}
                handleChange = {handleChange}
                />

                <Label text = "Contraseña: "/>

                <Input
                attribute={{
                    id: "password",
                    name: "password",
                    type: "password",
                    placeholder: "Ingrese su contraseña"
                }}
                handleChange = {handleChange}
                param = {passwordError}
                />

                {passwordError && 
                    <label className="label-error">Contraseña errónea</label>
                }
                <div>
                    <button className="boton"
                    onClick={handleSubmit}
                    >
                        Iniciar Sesión
                    </button>
                </div>
            </div>
        </header>
        
    )
};

export default Login;