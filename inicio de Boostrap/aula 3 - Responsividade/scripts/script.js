function trocarTema(){
    var temaAtual = document.querySelector("body").getAttribute("data-bs-theme")
    if (temaAtual == "light"){
        document.querySelector("body").setAttribute("data-bs-theme", "dark")
        document.querySelector("#trocarTemaBtn").innerHTML = '<img src="imgs/icons/sol.svg" alt="">';
    } else {
        document.querySelector("body").setAttribute("data-bs-theme", "light")
        document.querySelector("#trocarTemaBtn").innerHTML = '<img src="imgs/icons/lua.svg" alt="">';
    }
}