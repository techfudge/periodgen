function toggleDropdown() {
    document.getElementById("dropdown-content").classList.toggle("show"); 
}


window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

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

    const selectedPairs = Array.from(document.querySelectorAll('.pair-checkbox:checked')).map(cb => cb.value);
    
    if (selectedPairs.length === 0) {
        alert("Please select at least one forex pair.");
        return;
    }

    const randomPair = selectedPairs[Math.floor(Math.random() * selectedPairs.length)];

   
    document.getElementById('randomDate').innerText = `Random Date: ${randomDate.toDateString()}`;
    document.getElementById('randomDuration').innerText = `Random Duration: ${randomDuration} ${randomDuration === 1 ? 'day' : 'days'}`;
    document.getElementById('randomPair').innerText = `Forex Pair: ${randomPair}`;
}


document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    function updateIcon() {
        const isLightMode = body.classList.contains("light-mode");
        themeToggle.innerHTML = isLightMode ? "🌞" : "🌙";
        console.log("Icon changed to:", themeToggle.innerHTML); 
    }

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
    }
    updateIcon(); 

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
        updateIcon();
    });
});

function updateIcon() {
    setTimeout(() => {
        const isLightMode = body.classList.contains("light-mode");
        themeToggle.innerHTML = isLightMode ? "🌞" : "🌙";
    }, 50); 
}
