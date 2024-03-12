// _____ Ejercicio 1 _____ 
// Event listeners

document
.getElementById("img_border_js")
.addEventListener("click", addBorderToImg);

// Funciones

function addBorderToImg () {
    const element = this;
    const style = element.classList; 
    const hasStyleOn = style.contains("imgBorder_on");

    if (hasStyleOn) {
        style.remove("imgBorder_on");
    } else {
        style.add("imgBorder_on");
    }

}

// _____ Ejercicio 2 _____ 
// Event listeners 

let inputs = document.querySelectorAll("input[type='number']");
    inputs.forEach(function(input) {
        input.addEventListener("change", cantidadTotal);
    });

// Funciones
function cantidadTotal() {
    let object1 = parseInt(document.getElementById("object_1").value);
    let object2 = parseInt(document.getElementById("object_2").value);
    let object3 = parseInt(document.getElementById("object_3").value);

    let Total = object1 + object2 + object3;

    if (Total > 10) {
        document.querySelector('.cantidad_total').innerHTML = "demasiados"
    } else {
        document.querySelector('.cantidad_total').innerHTML = Total;
    }
}

cantidadTotal();

// _____ Ejercicio 3 _____ 
// Event listener
document
.getElementById("btnVerificar") 
.addEventListener("click", verificarPassord )

// Funcion

function verificarPassord () {
    let select1 = document.getElementById("select_1").value;
    let select2 = document.getElementById("select_2").value;
    let select3 = document.getElementById("select_3").value;

    let password = select1 + select2 + select3; 

    if (password === "911") {
        document.querySelector(".password_text").innerHTML = "Password 1 correcto";
    } else if (password === "714") {
        document.querySelector(".password_text").innerHTML = "Password 2 correcto";
    } else {
        document.querySelector(".password_text").innerHTML = "Password incorrecto";
    }
}