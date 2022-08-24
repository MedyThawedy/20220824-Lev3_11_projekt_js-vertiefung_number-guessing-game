// Rounds number;
let roundsNumber;
let randomNr;
let guessedNr;
let i = 0;
//const userInputCustom = document.getElementById('inputCustom');

// 
const btn = document.getElementById('idGuess');
const inputNr = document.getElementById('inputNr');

// Start the game
const fnSetRounds = (roundsInput) => {

    randomNr = Math.floor(Math.random() * 101);
    document.getElementById('inputCustom').style.display = 'none';
    document.getElementById('inputNr').disabled = false;
    document.getElementById('idGuess').disabled = false;
    document.getElementById('idPGameResults').innerHTML = '';

    if (roundsInput === 'cs') {
        document.getElementById('inputCustom').style.display = 'block';
        //???????  This piece of code didn't behave like I wanted and that's why line 26 oninput="fnInputCuston()"
        roundsNumber = Number(document.getElementById('inputCustom').value);
        console.log('Input Custom : ' + document.getElementById('inputCustom').value);

    } else {
        roundsNumber = Number(roundsInput);
    }

    console.log('Roundsnumber 1', roundsNumber);
    document.getElementById('idPRound').innerHTML = i;
    document.getElementById('idPRounds').innerHTML = roundsNumber;

}

function fnInputCuston() {
    roundsNumber = Number(document.getElementById('inputCustom').value);
}

btn.addEventListener('click', (e) => {
    arrFnStartTheRound();
}
);


const arrFnStartTheRound = () => {

    // User Number
    guessedNr = Number(document.getElementById('inputNr').value);
    ++i;
    if (i < roundsNumber) {
        document.getElementById('idRadioButtonsDiv').style.display = 'none';
        document.getElementById('idPRound').innerHTML = i;
        document.getElementById('idPRounds').innerHTML = roundsNumber;

        if (guessedNr > 100 || guessedNr == 0 || guessedNr < 0) {

            alert('Please type a number between 1 and 100');
            document.getElementById('inputNr').value = '';
            // Decrement i
            i--;
            return;
        }
        if (guessedNr === randomNr) {

            document.getElementById('idPGameResults').innerHTML = 'You won the game! ', 'Your guessed Number:', guessedNr, '=', 'Random Number: ', randomNr;
            i = 0;
            fnResetValues();

            return;

        } else {
            if (randomNr > guessedNr) {
                document.getElementById('idPGameResults').innerHTML += '<p>' + i + ' - ' + 'You need a number higher than ' + guessedNr + '</p>';
            } else if (randomNr < guessedNr) {
                document.getElementById('idPGameResults').innerHTML += '<p>' + i + ' - ' + 'You need a number lower than ' + guessedNr + '</p>';

            }

        }

        console.log(randomNr);
        console.log(guessedNr);

    } else {

        fnResetValues();
        return;

    }
}

function fnResetValues() {
    // https://www.geeksforgeeks.org/how-to-unchecked-a-radio-button-using-javascript-jquery/
    document.getElementById('inputCustom').value = '';
    document.getElementById('idRadioButtonsDiv').style.display = 'flex';
    document.getElementById('idPRound').innerHTML = i;
    document.getElementById('idPGameResults').innerHTML = '<p>' + i + ' - ' + 'The game is over! The number was = ' + randomNr + '</p>';
    i = 0;
    roundsNumber = 0;
    guessedNr = 0;
    randomNr = 0;
    document.getElementById('inputNr').value = '';
    //https://medium.com/@aligoren/disable-or-enable-html-element-with-javascript-1f388025bd18
    document.getElementById('inputNr').disabled = true;
    document.getElementById('idGuess').disabled = true;
    document.getElementById('r4').checked = false;
    document.getElementById('r5').checked = false;
    document.getElementById('r6').checked = false;
    document.getElementById('rCustom').checked = false;
}


