import React, {useState} from "react";
import Title from "./Title/Title";
import Label from "./Label/Label";
import Input from "./Input/Input";
import "./Login.css";

import {useNavigate} from "react-router-dom";

const Login = () => {

    let navigate = useNavigate(); //variable para navegar entre paginas

    //Constantes
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [returnedData, setReturnedData] = useState(["Hello"])

    const fetchData = async(user, contra) => {
        const newData = await fetch('http://localhost:5000/inicio',{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: user,
                password: contra
            })
        }).then(res => res.json())
        if(newData.outResult == 0){
            console.log(true)
            navigate("/home")
        }else{
            console.log(false)
            setPasswordError(true);
        }
        
    }

    //Funciones
    function handleChange(name,value){
        if(name == "usuario"){
            setUser(value)            
        }else{
            setPassword(value)
            setPasswordError(false)
        }
    };

    function ifMatch(param){
        if(param.user.length > 0 && param.password.length > 0){
            fetchData(param.user, param.password);
            console.log("usuario: " +param.user);
            console.log("password: " + param.password);
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
                className={"default-format"}
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
                className={"default-format"}
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