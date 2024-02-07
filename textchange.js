var words = ["Разработкой Discord ботов", "Разработкой Telegram ботов", "Разработкой игр на Unity"] //слова
var timebtwwords = [3, 3, 3] //Время между словами
var timebtwchars = 0.1 //Время между буквами
var id = "changeWords" //ID текста, который будет меняться
//Сверху настроечки, гайс
//Мой личный код, можете пиздить, но он возможно кривой, поэтому берите из инета лучше
//by feproldo
init()

var currentWord = 0;
var currentChar = 0;
var isDoneWord = false;
var obj
var intervalIdClear
var current = "";
function init(){
    obj = document.getElementById(id)
    setInterval(typingWord, timebtwchars*1000)
}
var needed = false;
function typingWord(){
    if(isDoneWord){
        if(needed) return
        setTimeout(startclear, timebtwwords[currentWord]*1000)
        needed = true
    }
    var arr = words[currentWord].split("")
    if(currentChar == arr.length) return isDoneWord = true;
    current += arr[currentChar]
    currentChar += 1
    obj.innerText = current;  
}
function startclear(){
    intervalIdClear = setInterval(clearWords, timebtwchars*1000)
}
function clearWords(){
    if(!isDoneWord) return
    if(current.length == 0){
        isDoneWord = false;
        needed = false;
        if(currentWord == words.length-1) currentWord = 0
        else currentWord += 1
        currentChar = 0
        current = ""
        clearInterval(intervalIdClear);
    }
    current = current.slice(0, -1);
    obj.innerText = current; 
}