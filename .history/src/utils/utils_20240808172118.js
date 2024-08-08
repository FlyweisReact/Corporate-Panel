const tokenSaver = (res) => {
    console.log(res)
    localStorage.setItem('token' , res)
}


export {
    tokenSaver
}