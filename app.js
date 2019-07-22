const clientebutton=document.getElementById("clientebutton");
const conductorbutton=document.getElementById("conductorbutton");

const seccion2=document.getElementById("seccion2");
const seccion3=document.getElementById("seccion3");
const seccion4=document.getElementById("seccion4")
const cliente=document.getElementById("cliente");
const conductor=document.getElementById("conductor");
const inicio=document.getElementById("inicio");

function clienteClick(){
    cliente.classList.remove("ocultar");
    inicio.classList.add("ocultar");
    seccion2.classList.add("ocultar");
    seccion3.classList.add("ocultar");
    seccion4.classList.add("ocultar");
};


function conductorClick(){
    conductor.classList.remove("ocultar");
    inicio.classList.add("ocultar");
    seccion2.classList.add("ocultar");
    seccion3.classList.add("ocultar");
    seccion4.classList.add("ocultar");
};

clientebutton.addEventListener("click",clienteClick);
conductorbutton.addEventListener("click",conductorClick);