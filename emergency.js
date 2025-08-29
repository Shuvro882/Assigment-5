
//Heart click
const heartCountElement = document.getElementById('navbar-heart-count'); 
    
    let heartCount = parseInt(heartCountElement.innerText); 

   
    const cardHearts = document.getElementsByClassName('card-heart'); 
    
    for (let i = 0; i < cardHearts.length; i++) {
        cardHearts[i].addEventListener('click', function() {
            heartCount++; 
            heartCountElement.innerText = heartCount; 
        });
    }

//Call click

const coinElement = document.getElementById('navbar-coin-count');
let coins = parseInt(coinElement.innerText);

const callHistoryList = document.getElementById('call-history-list');

const callButtons = document.getElementsByClassName('call-btn');

for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const serviceName = document.getElementById(`service-name-${id}`).innerText;
        const serviceNumber = document.getElementById(`service-number-${id}`).innerText;

        if (coins < 20) {
            alert("Not enough coins to make a call!");
            return;
        }

        coins -= 20;
        coinElement.innerText = coins;

        alert(`Calling ${serviceName}: ${serviceNumber}`);

        const historyItem = document.createElement('div');
        historyItem.className = "bg-gray-100 p-2 my-1 rounded";
        historyItem.innerHTML = `<strong>${serviceName}</strong> - ${serviceNumber}`;
        callHistoryList.appendChild(historyItem);
    });
}

const clearHistoryButton = document.getElementById('clear-history');

clearHistoryButton.addEventListener('click', function () {
    callHistoryList.innerHTML = '';
});


