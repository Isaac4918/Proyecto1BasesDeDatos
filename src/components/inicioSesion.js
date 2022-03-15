import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class InicioSesion extends React.Component{

    state = {
        form:{
            username: '',
            password: ''
        }
    }

    handleChange =async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form);
    }

    render(){
        
        var texto = "Ingreso de usuario";

        return(
            <div>
                <h1>{texto}</h1>        
                <h3 className='labelNombre'>Ingrese su nombre de usuario: </h3>

                <input
                    type = "text"
                    className="inputUser"
                    name="username"
                    onChange={this.handleChange}

                />

                <h3 className='labelNombre'>Ingrese su contraseña: </h3>

                <input
                    type="password"
                    className="inputUser"
                    name="password"
                    onChange={this.handleChange}
                />
                <div></div>
                <button onClick={() =>
                        {
                            this.texto = "Me cago en dios";
                            console.log("Si lo hice");
                        }
                }>Prueba</button>
            </div>
        );
    }
}

export default InicioSesion;