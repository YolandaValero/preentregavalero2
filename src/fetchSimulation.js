const FetchSimulation = (dataBase, time) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(dataBase);
            reject(new Error("Ups, algo salió mal"))
        }, time)
    })
}

export default FetchSimulation