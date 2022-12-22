import React from "react";
import styles from "./Form.module.css";
import {validation} from './validation'


export default function Form (props){    
    const[userData, setUserData] = React.useState({    
        username: '',
        password: ''
    })
    const[errors, setErrors] = React.useState({     
        username: '',
        password: ''
    })    

    const handleInputChange= (evento) => {
        setUserData(
            {...userData,
            [evento.target.name]: evento.target.value}
        )
        setErrors(validation({
            ...userData,
            [evento.target.name]: evento.target.value
        }))
    }
    const handleSubmit = (evento) =>{
        evento.preventDefault()
        props.login(userData);
    }
    return (
        <div className={styles.contenedor}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.h1form}>Log In</h1>
            <h2 className={styles.h2form}>Ingresa al mundo de Rick and Morty</h2>
            <div className={styles.divdatos}>
            <label htmlFor="username" className={styles.userPass}>Username:</label>
            <input 
            className={styles.input}
            id='username'
            name="username" 
            type="text" 
            placeholder="Ingresa tu usuario" 
            value={userData.username} 
            onChange={handleInputChange}  />
            <p className={styles.error}>{errors.username}</p>
            <label htmlFor="password" className={styles.userPass}>Password:</label>
            <input 
            className={styles.input}
            id='password' 
            name="password" 
            type="password"
            value={userData.password} 
            placeholder="Ingresa tu contrasena" 
            onChange={handleInputChange} />
            <p className={styles.error}>{errors.password}</p>
            </div>
            <div className={styles.submit}>
            <button className={styles.boton}>Ingresar</button>
            </div>
          </form>
        </div>
    )
}