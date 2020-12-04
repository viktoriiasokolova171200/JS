
var cell = document.querySelectorAll(".game-item"),             /*варианты комбинаций побед*/ 
    result = document.getElementById("result-game"),
    message = document.getElementById("message"),
    reset = document.getElementById("reset-game"),
    player = "X",
    step = 0,
    winArr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];  

for (var i = 0; i < 9; i++) {                                   /*игровое поле */
    cell[i].addEventListener("click", currentStep);
}

function currentStep(){                                         /*очередность ходов*/
    num = +this.getAttribute("data-sell");
    if(!this.textContent && step !== 9){
        this.innerText = player;
        player === "X" ? this.classList.add("x") : this.classList.add("o");
        player === "X" ? player = "O" : player = "X";
        message.innerText = "Ход игрока " + player;
        step++;
        winCheck(winArr, num);


        if(step == 9) {                                          /*ничья*/
            message.innerText = "Конец игры";
            result.innerText = "Ничья";
        }
    }
}

function winCheck(winArr, num) {                                 /*функция определения победы */
    for(w = 0;  w < winArr.length; w++) {
        for(j = 0; j < 3; j++) {
            if(winArr[w][j] === num){
                if(player === "X") {
                    winArr[w][j] = 0;
                }
                if(player === "O") {
                    winArr[w][j] = -100;
                }
            }
            var sum = winArr[w][0] + winArr[w][1] + winArr[w][2];
            if(sum === 0) {
                result.innerText = "Нолики победили";
                message.innerText = "Конец игры";
                for (i = 0; i < 9; i++) {
                    cell[i].removeEventListener("click", currentStep);
                }
                
            } else if(sum === -300) {
                result.innerText = "Крестики победили";
                message.innerText = "Конец игры";
                for (i = 0; i < 9; i++) {
                    cell[i].removeEventListener("click", currentStep);
                }
            }
        }
    }
}

reset.addEventListener("click", function (){                      /*заполнение игрового поля */
    for (i = 0; i < 9; i++) {
        cell[i].textContent = "";
        cell[i].classList.remove("x");
        cell[i].classList.remove("o");
        player = "X";
        step = 0;
        winArr = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ]; 
        result.innerText = "";
        message.innerText = "Ход игрока " + player;
        cell[i].addEventListener("click", currentStep);
    }
});