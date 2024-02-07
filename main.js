var isDay = true
start();
function swap(){
    isDay = !isDay;
    daynight();
}
function daynight(){
    if(!isDay){
        document.documentElement.style.setProperty('--background-color', 'rgb(20, 0, 60)');
        document.documentElement.style.setProperty('--header-color', 'rgb(35, 0, 115)');
        document.documentElement.style.setProperty('--header-shadow', 'rgb(45, 0, 135)');
        document.documentElement.style.setProperty('--header-i', 'white');
        document.documentElement.style.setProperty('--text-color', 'rgb(160, 115, 255)');
        document.documentElement.style.setProperty('--button-color', 'rgb(55, 10, 150)');
        document.documentElement.style.setProperty('--button-pressed-color', 'rgb(81, 22, 209)');
        document.getElementById('daynight').classList.add("bx-moon")
        document.getElementById('daynight').classList.remove("bx-sun")
        save('night');
    }
    else{
        document.documentElement.style.setProperty('--background-color', 'rgb(160, 115, 255)');
        document.documentElement.style.setProperty('--header-color', 'rgb(141, 102, 226)');
        document.documentElement.style.setProperty('--header-shadow', 'rgb(130, 94, 209)');
        document.documentElement.style.setProperty('--header-i', 'rgb(255, 255, 0)');
        document.documentElement.style.setProperty('--text-color', 'rgb(20, 0, 60)');
        document.documentElement.style.setProperty('--button-color', 'rgb(138, 84, 255)');
        document.documentElement.style.setProperty('--button-pressed-color', 'rgb(152, 104, 255)');
        document.getElementById('daynight').classList.add("bx-sun")
        document.getElementById('daynight').classList.remove("bx-moon")
        save('day');
    }
}
function link(link){
    window.open(link, "_blank")
}
function start(){
    if(localStorage.getItem("theme") == "day"){
        isDay = true;
    }
    else{
        isDay = false;
    }
    daynight()
}
function save(daynight){
    localStorage.setItem("theme", daynight);
}