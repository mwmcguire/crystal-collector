$( document ).ready(function() {
 
    // Four crystals displayed as buttons on the page

    // Computer generates a random number at the start (between 19 - 120)
    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomNumber = getRandomNumber(19, 120);

    $("#random-number").text(randomNumber);

    // 4 random values are generated for each crystal (each between 1 - 12)

    let crystal1Number = getRandomNumber(1, 12);
    let crystal2Number = getRandomNumber(1, 12);
    let crystal3Number = getRandomNumber(1, 12);
    let crystal4Number = getRandomNumber(1, 12);
    console.log (crystal1Number);
    console.log (crystal2Number);
    console.log (crystal3Number);
    console.log (crystal4Number);

    // When user clicks a crystal, add value to total score counter

    var totalScore = 0;

    $("#crystal1").on("click", function() {
        totalScore = crystal1Number + totalScore;
        $("#total-score-value").text(totalScore);
        compareNumbers();
    });

    $("#crystal2").on("click", function() {
        totalScore = crystal2Number + totalScore;
        $("#total-score-value").text(totalScore);
        compareNumbers();
    });

    $("#crystal3").on("click", function() {
        totalScore = crystal3Number + totalScore;
        $("#total-score-value").text(totalScore);
        compareNumbers();
    });

    $("#crystal4").on("click", function() {
        totalScore = crystal4Number + totalScore;
        $("#total-score-value").text(totalScore);
        compareNumbers();
    });

    // Add +1 to win counter if total score counter = computer generated number, and restart game
    // Add +1 to losses counter if total score counter > computer generated number, and restart game
    // When game is restarted:
        // Computer generates a new random number (between 19 - 120)
        // Crystals have four new hidden values (each between 1 - 12)
        // Total score counter resets to 0


    function updateNumbers() {
        console.log("----");
        randomNumber = getRandomNumber(19, 120);
        $("#random-number").text(randomNumber);
        crystal1Number = getRandomNumber(1, 12);
        console.log(crystal1Number);
        crystal2Number = getRandomNumber(1, 12);
        console.log(crystal2Number);
        crystal3Number = getRandomNumber(1, 12);
        console.log(crystal3Number);
        crystal4Number = getRandomNumber(1, 12);
        console.log(crystal4Number);
        totalScore = 0;
        $("#total-score-value").text("");
    }

    var wins = 0;
    var losses = 0;

    function compareNumbers() {
        if (totalScore === randomNumber) {
            wins++;
            $("#wins").text("Wins: " + wins)
            updateNumbers();

        } else if (totalScore > randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses)
            updateNumbers();
        }
    }

});
