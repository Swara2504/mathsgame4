player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");
player1_score= 0;
player2_score= 0;
function send()
{
    number1_input= document.getElementById("number1_input").value;
    number2_input= document.getElementById("number2_input").value;
    actual_answer= parseInt(number1_input) * parseInt(number2_input);
    question_number= "<h4>" + number1_input + " X " + number2_input + "</h4>";
    input_box= "<br>Answer : <input type='text' id='input_check_box'>";
    check_button= "<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";
    row= question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1_input").value="";
    document.getElementById("number2_input").value=""; 
}
question_turn= "player1";
answer_turn= "player2";

function check()
{
    get_answer= document.getElementById("input_check_box").value;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

    if(answer_turn =="player1")
    {

        update_player1_score = player1_score +1;
        document.getElementById("player1_score").innerHTML =  update_player1_score;
    }
    else
    {
        update_player2_score = player2_score +1;
        document.getElementById("player2_score").innerHTML =  update_player2_score;

    }
    if(question_turn =="player1")
    {

       question_turn = "player2"
        document.getElementById("player_question").innerHTML =  "Question Turn - " + player2_name;
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML =  "Question Turn - " + player1_name;

    }
}