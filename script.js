function func(){
    let summa = 0;
    const myElement1 = document.getElementById("bord");
    const myElement2 = document.getElementById("timer");
    myElement2.style.display = "block";
    myElement1.style.display = "none"; 
    let InV = document.getElementById("inpt").value;
    var sve = document.querySelector("#val123").value;  

    if(sve ==="h"){ //Проверяем что в час
        InV /= 3600;
    }else if(sve == "m"){ // проверяем что раз в минуту
        InV /= 60;
    }
    summa +=InV;
    function myTask(){ //добавляем деньги каждую минуту /секунду
        const my = document.getElementById('df');
        my.innerHTML =summa+" ₽";
        summa +=InV;
    }

    let timerId = setInterval(myTask, 1000); //интервал
}





