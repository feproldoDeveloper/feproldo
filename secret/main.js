var dc = document.getElementById("door")
function openn(){
    document.getElementsByClassName("button-door")[0].classList.remove("button-door")
    dc.classList.add("openn")
    document.getElementById("ruchka").classList.add("opennRuchka")
    setTimeout(openurl, 6000)
}
function openurl(){
    // location.href = './domoi/index.html'
    document.getElementById("img").style.display = "block"
    var audio = new Audio('./bruh.mp3');
    audio.loop = true;
    audio.play();
}