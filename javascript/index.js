const form = document.querySelector('#form')
const botonSend = document.querySelector('#send')
const botonOcultar = document.querySelector('.botonCerrar')
const botonDesplegar = document.querySelector('.botonAbrir')
const desplegar2 = document.querySelector('#desplegar2')
const desplegar3 = document.querySelector('#desplegar3')
const desplegar4 = document.querySelector('#desplegar4')
const ocultar2 = document.querySelector('#ocultar2')
const ocultar3 = document.querySelector('#ocultar3')
const ocultar4 = document.querySelector('#ocultar4')
const seccionCon = document.querySelector('#seccionCon')
const contenedor2 = document.querySelector('#contenedor2')
const contenedor3 = document.querySelector('#contenedor3')
const contenedor4 = document.querySelector('#contenedor4')
form.addEventListener('submit', handleSubmit)



botonOcultar.addEventListener("click", () => { handleBotonOcultar() })
ocultar2.addEventListener("click", () => {handleBotonOcultar2()})
ocultar3.addEventListener("click", () => {handleBotonOcultar3()})
ocultar4.addEventListener("click", () => {handleBotonOcultar4()})
botonDesplegar.addEventListener("click",() =>{ handleBotonDesplegar() })
desplegar2.addEventListener("click", () => {handleBotonDesplegar2()})
desplegar3.addEventListener("click", () => {handleBotonDesplegar3()})
desplegar4.addEventListener("click", () => {handleBotonDesplegar4()})


const handleBotonOcultar = () => {
   if(seccionCon != ""){
    seccionCon.innerHTML = ""
   }
}
const handleBotonOcultar2 = () => {
   if(contenedor2 != "" ){
    contenedor2.innerHTML = ""
   }
}
const handleBotonOcultar3 = () => {
    if(contenedor3 != "" ){
        contenedor3.innerHTML = ""
       }
}
const handleBotonOcultar4 = () => {
    if(contenedor4 != "" ){
        contenedor4.innerHTML = ""
       }
}
const handleBotonDesplegar = ()=>{
        seccionCon.innerHTML = ""
        seccionCon.innerHTML = `<div class="containerDatos">
                    <p>NOMBRE: </p>
                    <p>DIRECCION: </p>
                    <p>FECHA DE NACIMIENTO: </p>
                    <p>NACIONALIDAD: </p>
                    <p>ESTADO CIVIL: </p>
                    <p>D.N.I: </p>
                    <p>TELEFONO </p>

                </div>
                <div class="containerDatos2">
                    <p>Alvaro Agustin Robles</p>
                    <p>Base Sobral 1435</p>
                    <p>8/12/1999</p>
                    <p>Argentino</p>
                    <p>Soltero</p>
                    <p>42.209.392</p>
                    <p>+54 2974723099</p>
                </div>`
        
}
const handleBotonDesplegar2 = ()=>{
    contenedor2.innerHTML = ""
    contenedor2.innerHTML = `<div class="containerDatos">
    <p>2017</p>
    <p>2021</p>
    <p>2022</p>
</div>
<div class="containerDatos">
    <p>TITULO SECUNDARIO COMPLETO con orientación en economía y
        administración <br>
        Instituto Leonardo Da Vinci, Comodoro Rivadavia
    </p>
    <p>CURSO DE LENGUA EXTRANJERA INGLES <br>
        Istituto English Group, Comodoro Rivadavia
    </p>
    <p>ESTUDIOS UNIVERSITARIOS en Curso Lincenciatura en Informatica 1° Año <br>
        Universidad Nacional de la Patagonia San Juan Bosco, Comodoro
        Rivadavia
    </p>
</div>`
}
const handleBotonDesplegar3 = ()=>{
    contenedor3.innerHTML = ""
    cargarCertificados()
}
const handleBotonDesplegar4 = ()=>{
    contenedor4.innerHTML = ""
    contenedor4.innerHTML = ` <div class="redesSociales">
    <a href="sinref"><img title="Gmail" loading="lazy" src="imagnes/gmail.png" alt="gmailicon"></a>
    <a href="https://github.com/AlvaroRobles99"><img title="GitHub" loading="lazy"
            src="imagnes/github.png" alt="githubicon"></a>
    <a href="sinref"><img title="LinkedIn" loading="lazy" src="imagnes/linkedin.png"
            alt="linkedinicon"></a>
    <a href="sinref"><img title="Instagram" loading="lazy" src="imagnes/instagram.png"
            alt="instagramicon"></a>
    <p>Seguime en mis redes sociales o mandame un mensaje y yo me pondre en contacto contigo.</p>
</div>
<form id="form" action="" class="form">
    <h3 class="tag"><span>CONTACTAME</span></h3>
    <label for="name">Nombre Completo <span>*</span></label>
    <input name="name" required type="text" id="name" placeholder="Juan">
    <label for="email">Correo electrónico <span>*</span></label>
    <input name="email" type="text" id="email" required placeholder="example@gmail.com">
    <label for="message">Mensaje</label>
    <textarea id="message" name="message" cols="30" rows="10"></textarea>
    <button type="submit" class="btn primary full">ENVIAR</button>

</form>
<a href="mailto:alvaroagusrobles@gmail.com" id="send">mail</a>`
}

function handleSubmit(event) {
    event.preventDefault()
    const forma = new FormData(this)
    botonSend.setAttribute('href', `mailto:alvaroagusrobles@gmail.com?subject=nombre ${forma.get('name')}  correo ${forma.get('email')}&body=${forma.get('message')}`)
    botonSend.click()
    alert("Su Mensaje a Sido Enviado")
}




