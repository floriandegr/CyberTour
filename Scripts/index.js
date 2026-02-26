const setup = () => {
    let knop1 =document.getElementById("btn1")


    knop1.addEventListener("click", testfunctie)


}
let isingedrukt = true
const testfunctie = () =>{
isingedrukt = !isingedrukt;
console.log(isingedrukt);
}


window.addEventListener("load", setup);