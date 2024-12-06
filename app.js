
const donateButton = document.getElementsByClassName('donate-now');
const inputField = document.getElementsByClassName('input');
const sumDonation = document.getElementsByClassName('sum-donate');
const myBalance = document.getElementById('amount');

let totalDonated = 0;

function donate() {
    for(let i = 0; i < donateButton.length; i++){
        donateButton[i].addEventListener('click', function(){
            const inputs = inputField[i].value;
            if(isNaN (inputs) || inputs === ""){
                alert('please provide a valid number')
            }else {
                alert('Thank you for your donation')
            }
            inputField[i].value = "";

            totalDonated += parseFloat(inputs);
            updateSumDonationButton();

            // my balance minus

            const balance = myBalance.innerText;
            const minus = balance - inputs;
            myBalance.innerText = minus;


        })
    }
}

function updateSumDonationButton(){
    for(let i = 0; i < sumDonation.length; i++){
        sumDonation[i].innerText = `${totalDonated}`
    }
}

donate();