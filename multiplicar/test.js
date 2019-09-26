let getNombre = async () => {
    setTimeout(() => {
        return 'Illak';
    },3000);
}

let saludo = async () => {
    let nombre = await getNombre();

    return `Hola ${nombre}`;
}

saludo().then(mensaje => console.log(mensaje))