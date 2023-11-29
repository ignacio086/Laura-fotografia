function ready() {
    

    // la imagen aún no está cargada (a menos que se haya almacenado en caché), por lo que el tamaño es 0x0
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
}
document.addEventListener("DOMContentLoaded", ready);
const panels= document.querySelectorAll(".panel")

panels.forEach(panel =>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}
window.sr=ScrollReveal();
    sr.reveal('.titulo',{
        duration:1200,
        origin:'right',
        distance:'-400px',
    });
    sr.reveal('.enlace-p',{
        duration:1400,
        origin:'right',
        distance:'-400px',
    });
    sr.reveal('.enlace-s',{
        duration:1600,
        origin:'right',
        distance:'-400px',
    });
    sr.reveal('.enlace-t',{
        duration:1800,
        origin:'right',
        distance:'-400px',
    });
    sr.reveal('.enlace-c',{
        duration:2000,
        origin:'right',
        distance:'-400px',
    });
    sr.reveal('.enlace-q',{
        duration:2200,
        origin:'right',
        distance:'-400px',
    });
    sr.reveal('.enlace-se',{
        duration:2400,
        origin:'right',
        distance:'-400px',
    });
    sr.reveal('.pri-t',{
        duration:2000,
        origin:'left',
        distance:'-400px',
    });
    sr.reveal('.seg-t',{
        duration:2400,
        origin:'left',
        distance:'-400px',
    });
    sr.reveal('.footer',{
        duration:1400,
        origin:'top',
        distance:'-400px',
    });