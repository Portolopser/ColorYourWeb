//Array con colores puestos a mano
/* const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    ///Da un numero al azar entre 0 y 3
    const randomNumber = Math.floor(Math.random() * (0 + 4));
    console.log(randomNumber);
    //Según el número lo busca por posición en el array y lo establece como background color del body
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}); */

//Generar color random según click de botón
/*const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    //Generamos un color nuevo cada vez que pulsamos el botón
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    //Asignamos ese color generado al fondo del HTML
    document.body.style.backgroundColor = "#" + randomColor;
    //Lo ponemos en el span del HTML
    color.textContent = ("#" + randomColor)
});
*/

function setBackgroundColor () {
    do {
        /*Pregunta al usuario*/
        let setColor = prompt("Qué color quieres para el fondo?");

        /*Si el usuario no introduce nada, lo cierra*/
        if (setColor === null) break;

        /*Expresión regular para validar que es Hex*/
        let regExpHexColor = /^#([A-F0-9]{3}|[A-F0-9]{6})$/i;

        isValid = (setColor.match(regExpHexColor));

        /*Condicional*/ 
        if(isValid) {
            $(".background").css( "background-color", setColor);
        } else {
            alert("El numero que has introducido no es hexadecimal, vuelve a intentarlo");
        }

    } while (!isValid);
}

function setBtnColor () {
    
}

setBackgroundColor();

