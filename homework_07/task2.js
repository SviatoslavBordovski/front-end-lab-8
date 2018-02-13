var fun = confirm('Would you like to play some game');

while (fun) {
    var DoneAttempts = 0,
        attemptsLeft = 3,
        nextRage = true,
        range = 6,
        games = 0,    
        totalPrize = 0,
        maxPossiblePrize = 10,
        currentPossiblePrize = 10,
        luckyNumber = Math.floor(Math.random() * range);

    while (DoneAttemptsUsed < 3 && nextRage) {
        var userNumber = prompt(`Please enter a number from zero to ${range - 1}\nAttempts left: ${attemptsLeft}\nTotal prize: ${totalPrize}$\nPossible prize on current attempt: ${currentPossiblePrize}$`);

        if (!isNaN(parseFloat(userNumber)) && isFinite(userNumber) && Number(userNumber) === luckyNumber) {
            totalPrize += currentPossiblePrize;
            DoneAttempts = 0;
            attemptsLeft = 3;
            range = range * 2 - 1;
            maxPossiblePrize *= 3;
            currentPossiblePrize = maxPossiblePrize;
            luckyNumber = Math.floor(Math.random() * range);
            nextRage = confirm('Would you like to continue a game?');
        } else {
            attemptsLeft--;
            DoneAttempts++;
            currentPossiblePrize = Math.floor(maxPossiblePrize / (DoneAttempts * 2));
        }
    }

    console.log(`Thank you for a game. Your prize is ${totalPrize}`);
    fun = confirm('Do you want to try again?');
    games++;
}

if (!games) {
    console.log('You had not become a millionaire');
}