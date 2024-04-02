const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openmodal = () =>{
    console.log(`modal is active`);
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}
const closemodal = () =>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}
