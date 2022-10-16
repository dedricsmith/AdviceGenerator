const adviceBtn = document.querySelector('.dice--container');
const adviceID = document.querySelector('.advice--id');
const quote = document.querySelector('.advice--text');

let advice, advice__id;

const getAdviceData = () => {
  fetch('https://api.adviceslip.com/advice')
    .then(resp => resp.json())
    .then(data => {
      advice = data.slip.advice;
      advice__id = data.slip.id;
    });
};

adviceBtn.addEventListener('click', ev => {
  getAdviceData();
  if (ev.target.classList.contains('dice'))
    adviceID.innerText = `Advice #${advice__id}`;
  quote.innerText = `"${advice}"`;
  console.log(quote.innerText, adviceID.innerText);
});
