const quoteDisplay = document.getElementById("quote");
const quoteNum = document.getElementById("quoteNum");
const generateBtn = document.getElementById("btn");

generateBtn.addEventListener("click", getQuote);

window.onload = () => {
  getQuote();
}

function getQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then(response => {
        return response.json();
    })
    .then(data => {
        const quoteObj = data.slip.advice;
        const quoteDataNum = data.slip.id;
        quoteDisplay.innerText = `"${quoteObj}"`;
        quoteNum.innerText = `ADVICE #${quoteDataNum}`;
    })
    .catch(error => {
        return console.log(error);
    });
}