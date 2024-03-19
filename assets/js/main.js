//función asíncrona para obtener los datos de la URL
const albunes = async () =>{
    const url = "https://jsonplaceholder.typicode.com/photos";

    try{
        const response = await fetch(url);
        const datos = await response.json();

        datos.forEach(element => {
            if (element.id <= 20) {
                console.log(element.title)
            }
            
        });

    }catch (error){
        console.error(error);
    }

};

// retorne una promesa después de tres (3)
const mensaje = new Promise ((resolve, reject) => {
    setTimeout (() => {
        resolve("Información Enviada")
    }, 3000);
})


//Crear una función asíncrona que permita recibir el mensaje de la promesa creada
const mostrarMensaje = async () => {
    await albunes();
    const mensajeRecibido = await mensaje;
    console.log (mensajeRecibido)
}

mostrarMensaje();