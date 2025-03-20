    function generateRandom() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const minDuration = parseInt(document.getElementById('minDuration').value);
    const maxDuration = parseInt(document.getElementById('maxDuration').value);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        alert("Please select valid start and end dates.");
        return;
    }

    if (startDate >= endDate) {
        alert("End date must be later than start date.");
        return;
    }

    if (minDuration > maxDuration) {
        alert("Maximum duration must be greater than or equal to minimum duration.");
        return;
    }

    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    const randomDuration = Math.floor(Math.random() * (maxDuration - minDuration + 1)) + minDuration;

    const forexPairs = [
        
    ];
    const randomPair = forexPairs[Math.floor(Math.random() * forexPairs.length)];

    document.getElementById('randomDate').innerText = randomDate.toDateString();
    document.getElementById('randomDuration').innerText = randomDuration;
    document.getElementById('randomPair').innerText = randomPair;
}



function generateRandom() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const minDuration = parseInt(document.getElementById('minDuration').value);
    const maxDuration = parseInt(document.getElementById('maxDuration').value);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        alert("Please select valid start and end dates.");
        return;
    }

    if (startDate >= endDate) {
        alert("End date must be later than start date.");
        return;
    }

    if (minDuration > maxDuration) {
        alert("Maximum duration must be greater than or equal to minimum duration.");
        return;
    }

    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    const randomDuration = Math.floor(Math.random() * (maxDuration - minDuration + 1)) + minDuration;

 
    const forexPairs = ["GBP/USD",  "XAU/USD","GBP/JPY"];

   
    const randomPair = forexPairs[Math.floor(Math.random() * forexPairs.length)];

   
    document.getElementById('randomDate').innerText = randomDate.toDateString();
    document.getElementById('randomDuration').innerText = randomDuration;
    document.getElementById('randomPair').innerText = randomPair;
}
