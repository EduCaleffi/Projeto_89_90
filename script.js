function addUser(){
    Player1Name = document.getElementById("Player1NameInput").value;
    Player2Name = document.getElementById("Player2NameInput").value;

    localStorage.setItem("Player1Name", Player1Name);
    localStorage.setItem("Player2Name", Player2Name);

    window.location = "game_page.html";
}