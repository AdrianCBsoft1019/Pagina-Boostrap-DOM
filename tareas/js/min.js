const inputs = document.querySelector(".tareagreg1")
const inputs2 = document.querySelector(".tareagreg2")
const inputs3 = document.querySelector(".tareagreg3")
const inputs4 = document.querySelector(".tareagreg4")
const boton = document.querySelector(".crear")
const listaT=document.querySelector("#lista")

function agregarTarea(e){

    e.preventDefault()

        if (inputs.value !==""  || inputs2.value !=="" || inputs3.value !=="" || inputs4.value !=="") {

            let nuevaT = document.createElement(`div`)
            nuevaT.classList.add(`tarea`,`container-fluid` ,`mt-3`)

            let nuevaT1 = document.createElement(`div`)
            nuevaT1.classList.add(`card` ,`shadow` ,`border-0`)
            nuevaT.appendChild(nuevaT1)

            let nuevaT2 = document.createElement(`div`)
            nuevaT2.classList.add(`row`, `g-0`,`align-items-center`)
            nuevaT1.appendChild(nuevaT2)


            let nuevaT3 = document.createElement(`div`)
            nuevaT3.classList.add(`col-9`)
            nuevaT2.appendChild(nuevaT3)


            let nuevaT4 = document.createElement(`div`)
            nuevaT4.classList.add(`card-body`,`p-3`)
            nuevaT3.appendChild(nuevaT4)

            let nuevaT5 = document.createElement(`h5`)
            nuevaT5.classList.add(`card-title`,`fw-bold`,`mb-1`,`text-dark`)
            nuevaT5.innerText=inputs4.value
            nuevaT4.appendChild(nuevaT5)
            
            let texto = document.createElement(`p`)
            texto.classList.add(`text-muted`, `mb-0`, `d-flex` ,`flex-wrap` ,`small`)
           nuevaT5.appendChild(texto)

       let nuevaT6 = document.createElement(`span`)
            nuevaT6.classList.add(`fw-semibold`,`text-primary`, `me-3`)
            nuevaT6.innerText=inputs.value
            texto.appendChild(nuevaT6)

            let nuevaT7 = document.createElement(`span`)
            nuevaT6.classList.add( `me-3`)
            nuevaT6.innerText=inputs2.value
            texto.appendChild(nuevaT7)

            let nuevaT8 = document.createElement(`span`)
            nuevaT6.classList.add( `me-3`)
            nuevaT6.innerText=inputs3.value
            texto.appendChild(nuevaT8)

            let nuevaT9 = document.createElement(`div`)
            nuevaT9.classList.add(`col-3`,`border-start`)
            nuevaT2.appendChild(nuevaT9)

            let nuevaT01 = document.createElement(`div`)
            nuevaT01.classList.add(`d-flex`,`justify-content-around` ,`align-items-center`,`h-100`,`p-2`)
            nuevaT9.appendChild(nuevaT01)


            
            let completar =document.createElement(`i`)
            completar.classList.add(`fa-solid`, `fa-calendar-check`,`icono-complet`);
            completar.addEventListener('click',complet)

            let elimin =document.createElement(`i`)
            elimin.classList.add(`fa-solid` ,`fa-trash-arrow-up` ,`fa-shake`);
            elimin.addEventListener('click',elimi)


            nuevaT01.append(completar,elimin)

            listaT.appendChild(nuevaT)



 }else{
    alert(`por favor agrega una nueva tarea`)
 }
}

function complet(e){
    let tarea = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    tarea.classList.toggle('completada')
}
function elimi(e){
      let tarea = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
      tarea.remove()
}
boton.addEventListener('click',agregarTarea)


