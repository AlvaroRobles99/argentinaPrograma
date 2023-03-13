const listaCertificados = [
    {
        id : 1 ,
        nombre : "HTML y CSS desde Cero",
        img : "imagnes/html y css desde cero.png",
        alt : "curso html y css desde cero",
        url : "https://todocodeacademy.com/certificate/certificado-html-y-css-ilc/"
    },
    {
        id : 2,
        nombre : "Fundamentos del Diseño Grafico" ,
        img : "imagnes/Certificado-Fundamentos-del-Diseño-Gráfico-EducaciónIT.png",
        alt : "curso de fundamentos del diseño grafico",
        url : "https://api.educacionit.com/pdf/certificados/alvaro-agustin-robles-876465/13709"
    },
    {
        id : 3 ,
        nombre : "Introduccion al Mundo Web",
        img : "imagnes/Certificado-Introducción-al-mundo-web-EducaciónIT.png",
        alt : "Certificado-Introducción-al-mundo-web-EducaciónIT",
        url : "https://api.educacionit.com/pdf/certificados/alvaro-agustin-robles-876465/44471"
    },
    {
        id : 4 ,
        nombre : "Introduccion a Git y GitHub",
        img : "imagnes/introduccion a git y github.png",
        alt : "curso introduccion a git y github",
        url : "https://todocodeacademy.com/certificate/34p/"
    },
    {
        id : 5 ,
        nombre : "Introduccion a los Algoritmos y la Programacion",
        img : "imagnes/introduccion a los Algoritmos y la Programacion.png",
        alt : "Curso Introduccion a los Algoritmos y la Programacion",
        url : "https://todocodeacademy.com/certificate/kqp/"
    },
    {
        id : 6 ,
        nombre : "Diseño Web con HTML5 + CSS",
        img : "imagnes/Diseño Web con HTML5 + CSS.png",
        alt : "Curso de diseño web con htlm5 y css",
        url : ""
    },
    {
        id : 7 ,
        nombre : "Programacion con Javascript",
        img : "imagnes/programacion con javaScript.png",
        alt : "Curso de programacion con javaScript",
        url : ""
    },
    {
        id : 8 ,
        nombre : "Introduccion al Mundo IT",
        img : "imagnes/Introduccion al Mundo IT.png",
        alt : "Curso de introduccion al mundo it",
        url : ""
    },
    {
        id : 9 ,
        nombre : "Webinar Fullstack Web Developer",
        img : "imagnes/Certificado-Full-Stack-Web-Developer-EducaciónIT.png",
        alt : "Certificado-Full-Stack-Web-Developer-EducaciónIT",
        url : "https://api.educacionit.com/pdf/certificados/alvaro-agustin-robles-876465/63673"
    }
]
const contenedorCertificado = document.querySelector('#contenedor3')
const plantillaCertificado = (certificado) => {
 return ` <div id="${certificado.id}" class="box">
 <h4>${certificado.nombre}</h4>
 <a href="${certificado.url}" target="_blank"><img class="certificado" loading="lazy" src="${certificado.img}" alt="${certificado.alt}"></a>
</div>`
}

const cargarCertificados = () =>{
    contenedorCertificado.innerHTML = ""
    listaCertificados.forEach(certificado => {
     
        contenedorCertificado.innerHTML += plantillaCertificado(certificado)
     
    })}
cargarCertificados()










