const parent = document.querySelector('#title');
const title = parent.querySelector("#title-titl")
const desc = parent.querySelector("#title-desc")
const img = document.getElementById("title-img-img")
var isAnim = false;
parent.style.display = "none"
function js(){
    if(isAnim) return
    isAnim = true;
    img.src = "nodejs.png"
    title.innerText = "NodeJs"
    desc.innerText = "Создаю ботов."
    parent.style.display = "block"
    parent.style.animation = "titleAnimOpen 1s forwards"
    setTimeout(offAnim, 2500)
}
function csharp(){
    if(isAnim) return
    isAnim = true;
    img.src = "csharp.png"
    title.innerText = "C#"
    desc.innerText = "Работаю с Unity."
    parent.style.display = "block"
    parent.style.animation = "titleAnimOpen 1s forwards"
    setTimeout(offAnim, 2500)
}
function unity(){
    console.log("1")
    if(isAnim) return
    isAnim = true;
    img.src = "unity.png"
    title.innerText = "Unity"
    desc.innerText = "Создаю игры."
    parent.style.display = "block"
    parent.style.animation = "titleAnimOpen 1s forwards"
    setTimeout(offAnim, 2500)
}
function offAnim(){
    parent.style.animation = "titleAnimClose 1s forwards"
    setTimeout(offAnim1, 1000)
}
function offAnim1(){
    parent.style.display = "none"
    parent.style.animation = ""
    isAnim = false  
}