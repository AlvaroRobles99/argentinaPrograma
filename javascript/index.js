const form = document.querySelector('#form')
const botonSend = document.querySelector('#send')

form.addEventListener('submit', handleSubmit)


function handleSubmit(event) {
    event.preventDefault()
    const forma = new FormData(this)
    botonSend.setAttribute('href', `mailto:alvaroagusrobles@gmail.com?subject=nombre ${forma.get('name')}  correo ${forma.get('email')}&body=${forma.get('message')}`)
    botonSend.click()
}




