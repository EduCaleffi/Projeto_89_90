player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

    player1Score = 0;
    player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " ; :";
document.getElementById("player2Name").innerHTML = player2Name + " ; :";

document.getElementById("player1Score").innerHTML = player1Score + " ; :";
document.getElementById("player1Score").innerHTML = player1Score + " ; :";

document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - "; + player1Score;
document.getElementById("playerAnswer").innerHTML = "Turno de  Resposta- "; + player2Score;

function send(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    actual_answer = parseInt(num1) * parseInt(num2);
    console.log(actual_answer);


    question_number "<h4>" + num1 + "X"+ num2 +"</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'";
    check_button = "<br><br>"
    }