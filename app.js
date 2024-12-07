
const donateButton = document.getElementsByClassName('donate-now');
const inputField = document.getElementsByClassName('input');
const sumDonation = document.getElementsByClassName('sum-donate');
const myBalance = document.getElementById('amount');

let totalDonated = 0;

function donate() {
    for(let i = 0; i < donateButton.length; i++){
        donateButton[i].addEventListener('click', function(){
            const inputs = inputField[i].value;
            const titles = document.getElementsByClassName('title')[i].innerText;
            if(isNaN (inputs) || inputs === "" || parseFloat(inputs) <= 0){
                alert('please provide a valid number');
            }else {
                alert('Thank you for your donation');
                totalDonated += parseFloat(inputs);
            updateSumDonationButton();

            // my balance minus

            const balance = myBalance.innerText;
            const minus = balance - inputs;
            myBalance.innerText = minus;


            // history work

            const historyItem = document.createElement('div');
            historyItem.className = 'p-4 border border-gray-200 rounded-lg shadow-sm';

            historyItem.innerHTML = `<p class="text-lg font-semibold">${inputs} Taka is ${titles}</p>
            <p class="text-sm text-gray-500">Date: ${new Date().toLocaleDateString()}</p>
            <p class="text-sm text-gray-500">Time: ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>
            `;

            const historyList = document.getElementById('history-list');
            historyList.appendChild(historyItem, historyList.firstChild);


            }
            inputField[i].value = "";
            
        });
    }
}

function updateSumDonationButton(){
    for(let i = 0; i < sumDonation.length; i++){
        sumDonation[i].innerText = `${totalDonated}`
    }
}

// history tab functionality

const historyTab = document.getElementById('history');
const donationTab = document.getElementById('donation');
historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-[#B4F461]', 'text-[#111111]');
    donationTab.classList.remove('bg-[#B4F461]', 'text-[#111111]');

    // history button remove banner
    document.getElementById('banner').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
});

// donation tab

donationTab.addEventListener('click', function(){
    donationTab.classList.add('bg-[#B4F461]', 'text-[#111111]');
    historyTab.classList.remove('bg-[#B4F461]', 'text-[#111111]');
    document.getElementById('banner').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
})

donate();