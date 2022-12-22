const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/      //mi regex de email
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,10}$/     //mi regex de pass

export function validation (userData){
    let errors = {};

    if(!regexEmail.test(userData.username)) {
         errors.username = 'El usuario debe ser una email'
    }else if(!userData.username) {
         errors.username = 'El usuario no puede estar vacio'
    }else if(userData.username.length >35) {
         errors.username = 'El email no puede ser mayor a 35 caracteres';
    }
    if(!regexPassword.test(userData.password)){
         errors.password = 'Debe contener al menos un numero'
    }else if(userData.password.length > 10 && userData.password.length < 6){
         errors.password = 'Contrasena entre 6 y 10 caracteres'
    }
    return errors
}