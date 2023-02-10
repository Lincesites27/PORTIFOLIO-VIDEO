{/* <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script> */}
// https://github.com/mattboldt/typed.js


var typeEffect = new Typed(".multiText", {
    strings :['Programador', 'Ux/Ui', 'Front-End', 'Full-Stack'],
    loop: true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:1500
})

const darkMode = () =>{
    const body = document.querySelector("body");
    body.classList.toggle("dark")
}