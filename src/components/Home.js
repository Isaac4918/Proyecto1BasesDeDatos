import Title from "./Title/Title";
import React, { useState } from "react";
import Input from "./Input/Input";
import "./Input/Input.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
    const [passwordError, setPasswordError] = useState(false);
    const [listaArticulos, setlistaArticulos] = useState();
    const [nombreB, setnombreB] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [nombreA, setnombreA] = useState('');
    const [precioA, setprecioA] = useState(0);
    const [valid, setvalid] = useState(true);


    const getValid = async (name) => {
        const newData = await fetch('http://localhost:5000/getValid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
            })
        }).then(res => res.json())
        
        console.log("validddd",newData)
        if (newData.outResult === 0){
            setvalid(false)
        }
        else if (newData.outResult === 50001){
            setvalid(true)
        }
    }
    const getAdded = async (name,price) => {
        const newData = await fetch('http://localhost:5000/getAdded', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                price: price,
            })
        }).then(res => res.json())

        console.log("validddd",newData)
    }
    const getFromCant = async (cant) => {
        const newData = await fetch('http://localhost:5000/getFromCant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: cant,
            })
        }).then(res => res.json())
        console.log("canttttttttttttt",newData)
        setlistaArticulos(newData)

    }
    const getFromName = async (name) => {
        const newData = await fetch('http://localhost:5000/getFromName', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
            })
        }).then(res => res.json())
        setlistaArticulos(newData)
        console.log("aaaaaaaaaa", newData)

    }
    function handleChange(name, value) {
        
        if (name == "nameSearch") {
            setnombreB(value)
        } else if (name == "cantid") {
            setCantidad(value)
        }
        else if (name == "nombreAdd") {
            setvalid(true)
            setnombreA(value)
        }
        else if (name == "precioAdd") {
            setprecioA(value)
        }
    };
    function handleSubmitN() {
        setlistaArticulos('')
        getFromName(nombreB)

    };
    function handleSubmitC() {
        setlistaArticulos('')

        getFromCant(cantidad)

    };
    function validar(){

        getValid(nombreA)
    };
    function agregar() {
        getAdded(nombreA,toString(precioA))
    }

    return (
        <div className="formato">
            <Title text="Home Page" />
            <div className="boxs">
                <div className="infoBox">
                    <h3>Buscar</h3>
                    <div style={{ display: "flex" }}>
                        {/*                        <input
                            placeholder={"Ingrese el nombre"}
                            onChange={(e) => console.log("asdf",e.target.value)}
                            className={"nameInput"}
    />*/}
                        <Input
                            attribute={{
                                id: "nameSearch",
                                name: "nameSearch",
                                type: "text",
                                placeholder: "Ingrese el nombre"
                            }}
                            handleChange={handleChange}
                            param={passwordError}
                        />

                        <button className="boton"
                            onClick={handleSubmitN}
                        >

                            Por Nombre
                        </button>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Input
                            attribute={{
                                id: "cantid",
                                name: "cantid",
                                type: "text",
                                placeholder: "Ingrese la Cantidad"
                            }}
                            handleChange={handleChange}
                            param={passwordError}
                        />
                        <button className="boton"
                            onClick={handleSubmitC}

                        >
                            Por Cantidad
                        </button>
                    </div>


                </div>
                <div className="infoBox">
                    <h3>Ingresar Nuevo</h3>
                    <div style={{ display: "flex" }}>
                        {/*                        <input
                            placeholder={"Ingrese el nombre"}
                            onChange={(e) => console.log("asdf",e.target.value)}
                            className={"nameInput"}
    />*/}
                        <Input
                            attribute={{
                                id: "nombreAdd",
                                name: "nombreAdd",
                                type: "text",
                                placeholder: "Ingrese el nombre"
                            }}
                            handleChange={handleChange}
                            param={passwordError}
                        />

                        <button className="boton"
                            onClick={validar}
                        >

                            Validar
                        </button>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Input
                            attribute={{
                                id: "precioAdd",
                                name: "precioAdd",
                                type: "money",
                                placeholder: "Ingrese el precio"
                            }}
                            handleChange={handleChange}
                            param={passwordError}
                        />
                        <div >
                        <button className="boton"
                            disabled={valid}
                            onClick={agregar}

                        >
                            Agregar
                        </button>  
                        </div>

                    </div>


                </div>

            </div>
            <div >
                <label className="celdaN"> {"Nombre"} </label>
                <label className="celdaP"> {"Precio"} </label>
            </div>
            {listaArticulos ?
                listaArticulos.map((art) => {
                    return <div>
                        <label className="celdaN"> {art.Nombre} </label>
                        <label className="celdaP"> {art.Precio} </label>
                    </div>
                })
                : null}


            <button className="boton"
                onClick={getFromName}
            >
                Iniciar Sesión
            </button>

        </div>
    )
};

export default Home;