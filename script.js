var mainDiv = document.querySelector('.main-class');
var boxDiv;
var emptyArray = [];
for (i = 1; i <= 100; i++) {
    boxDiv = document.createElement('p');
    boxDiv.setAttribute('class', 'boxes');
    boxDiv.innerHTML = 101 - i;
    // boxDiv.setAttribute('value',i);
    emptyArray.push(boxDiv);
    mainDiv.appendChild(boxDiv);
}
//   console.log(emptyArray[2]);

var roundValue;
var random;
var duice;
var check = 99;
var moving_2 = 99;
var startBtn = document.querySelector('#btn');
var swapBtn = true;

startBtn.addEventListener('click', swap);
function call() {
    // emptyArray[check].style.backgroundColor = '';
    // startBtn.innerHTML = 'Change';
    // var num = 0;
    random = Math.random();
    roundValue = random * 6;
    duice = Math.floor(roundValue);
    console.log(duice);

    //    if(colorNum < 100){
    //     colorNum = colorNum + duice;
    //     console.log(colorNum);
    //    }
    //    if(emptyArray[colorNum] < 100){
    //        boxDiv.style.backgroundColor = 'red';
    //    }
     // console.log(check);

    // red color player (or) player-1
     if (swapBtn == true){
        emptyArray[check].style.backgroundColor = '';
        
        if (duice != 0) {
            check = check - duice;
         }
         console.log('red');
     if (check > 1) {
         emptyArray[check].style.backgroundColor = 'red';
     }
     else if (check == 0) {
         emptyArray[check].style.backgroundColor = 'rgb(13, 209, 95)';
         alert('***Your Win***');
     }
     else {
         alert('Your Lose!!')
     }
    }   
    // blue color player (or) player-2
    else{
        emptyArray[moving_2].style.backgroundColor = '';
        console.log('blue');
        if ( duice != 0){
        moving_2 = moving_2 - duice;
        }
        if (moving_2 > 1) {
            emptyArray[moving_2].style.backgroundColor = 'blue';
        }
        else if (moving_2 == 0) {
            emptyArray[moving_2].style.backgroundColor = 'rgb(13, 209, 95)';
            alert('***Your Win***');
        }
        else {
            alert('Your Lose!!')
        }
    }
};

// swap button 
function swap(){
    startBtn.innerHTML = 'Change';
    call();
    swapBtn = !swapBtn;
    // console.log(swapBtn);
}
