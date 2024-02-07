var words1 = ["Тикеты без рекламы", "Меж-серверный чат", "Логирование", "Модерация в одной команде", "Защита", "Приватные голосовые", "Розыгрыши", "РП команды", "Настройка в одной команде"] //слова
var timebtwwords1 = [2, 2, 2, 2, 2, 2, 2, 2, 2] //Время между словами
var timebtwchars1 = 0.05 //Время между буквами
var id1 = "changeDist" //id1 текста, который будет меняться
//Сверху настроечки, гайс
//Мой личный код, можете пиздить, но он возможно кривой, поэтому берите из инета лучше
//by feproldo
init1()

var current1Word1 = 0;
var current1Char1 = 0;
var isDoneWord1 = false;
var obj1
var intervalid1Clear
var current1 = "";
function init1(){
    obj1 = document.getElementByid1(id1)
    setInterval(typingWord1, timebtwchars1*1000)
}
var needed1 = false;
function typingWord1(){
    if(isDoneWord1){
        if(needed1) return
        setTimeout(startclear1, timebtwwords1[current1Word1]*1000)
        needed1 = true
    }
    var arr = words1[current1Word1].split("")
    if(current1Char1 == arr.length) return isDoneWord1 = true;
    current1 += arr[current1Char1]
    current1Char1 += 1
    obj1.innerText = current1;  
}
function startclear1(){
    intervalid1Clear = setInterval(clearwords1, timebtwchars1*1000)
}
function clearwords1(){
    if(!isDoneWord1) return
    if(current1.length == 0){
        isDoneWord1 = false;
        needed1 = false;
        if(current1Word1 == words1.length-1) current1Word1 = 0
        else current1Word1 += 1
        current1Char1 = 0
        current1 = ""
        clearInterval(intervalid1Clear);
    }
    current1 = current1.slice(0, -1);
    obj1.innerText = current1; 
}